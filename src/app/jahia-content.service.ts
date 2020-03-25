import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Tutorial } from './tutorial';
import { request } from 'graphql-request';

const API_ENDPOINT = `${environment.jahiaHost}/modules/graphql`;
const MEDIA_BASE_PATH = `${environment.jahiaHost}/files/live`;

@Injectable({
  providedIn: 'root'
})
export class JahiaContentService {
  private tutorials: Tutorial[] = [];

  getTutorials(): Promise<Tutorial[]> {
    const query = `{
      jcr (workspace: LIVE) {
        queryResults: nodesByCriteria(criteria: {
          nodeType: "jntuto:tutorialItem"
        }) {
          nodes {
            uuid
            title: property(name:"jcr:title") { value }
            body: property(name:"body") { value }
            image: property(name: "image") { refNode { path } }
            publishedDate: property(name: "jcr:lastModified") { value }
            publishedBy: property(name: "jcr:lastModifiedBy") { value }
          }
        }
      }
    }`;

    let promise = new Promise<Tutorial[]>((resolve, reject) => {
      request(API_ENDPOINT, query).then(results => {
        this.tutorials = [];

        results.jcr.queryResults.nodes.forEach(node => {
          let tutorial = new Tutorial();

          tutorial = {
            id: node.uuid,
            body: node.body.value,
            title: node.title.value,
            image: `${MEDIA_BASE_PATH}${node.image.refNode.path}`,
            publishedBy: node.publishedBy.value,
            publishedDate: new Date(node.publishedDate.value)
          }

          this.tutorials.push(tutorial);
        });

        resolve(this.tutorials);
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
    });

    return promise;
  }

  getTutorial(tutorialId: string) : Tutorial {
    return this.tutorials.find(tutorial => tutorialId === tutorial.id);
  }

  constructor() { }
}
