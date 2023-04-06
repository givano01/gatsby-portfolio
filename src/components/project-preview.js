import * as React from "react"
import { graphql, useStaticQuery } from 'gatsby';
import Project from './project';



const ProjectPreview = ({slug}) => {
  
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            description
            slug
            url
            title
            tags
          }
        }
      }
    }
    
  `);

  const project = data.allProjectsJson.edges.find(edge => edge.node.slug === slug)?.node;

  if (!project) {
    return null; 
  }

  return (
    <div>
      {/*{projects.map(({ node: project }) => ( */}
        <Project
          key={project.slug}
          description={project.description}
          slug={project.slug}
          url={project.url}
          title={project.title}
          tags={project.tags}
        />
      {/*))}*/}
    </div>
  );
};

export default ProjectPreview;

