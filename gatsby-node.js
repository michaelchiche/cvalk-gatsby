/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);
const { slugify } = require('voca');
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const CategoryTemplate = path.resolve('./src/templates/Category.tsx');
  const PaintingTemplate = path.resolve('./src/templates/Painting.tsx');
  const result = await graphql(`
    query allCategories {
      cvalk {
        categories {
          id
          title
          galleries {
            id
            title
            paintings {
              id
              title
              gallery {
                title
              }
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  const Categories = result.data.cvalk.categories;
  Categories.forEach(category => {
    createPage({
      path: `/${slugify(category.title)}`,
      component: CategoryTemplate,
      context: {
        where: {
          gallery: {
            category: {
              id: category.id,
            },
          },
        },
        id: category.id,
      },
    });
    category.galleries.map(g => {
      g.paintings.map(p => {
        createPage({
          path: `/${slugify(category.title)}/${slugify(
            p.gallery.title,
          )}/${slugify(p.title)}`,
          component: PaintingTemplate,
          context: {
            id: p.id,
          },
        });
      });
    });
  });
};
