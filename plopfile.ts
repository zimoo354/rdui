module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: (_data) => {
      const path = 'src/components/';
      return [
        {
          // Add a new file
          type: 'add',
          // Path for the new file
          path: path + '{{pascalCase name}}/{{pascalCase name}}.tsx',
          // Handlebars template used to generate content of new file
          templateFile: 'plop-templates/Component/Component.tsx.hbs',
        },
        {
          type: 'add',
          path: path + '{{pascalCase name}}/index.ts',
          templateFile: 'plop-templates/Component/index.ts.hbs',
        },
        {
          type: 'add',
          path: path + '{{pascalCase name}}/{{pascalCase name}}.styles.tsx',
          templateFile: 'plop-templates/Component/Component.styles.tsx.hbs',
        },
        {
          type: 'add',
          path: path + '{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
          templateFile: 'plop-templates/Component/Component.stories.tsx.hbs',
        },
      ];
    },
  });
};
