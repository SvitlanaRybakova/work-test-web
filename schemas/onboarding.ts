export default {
  name: 'onboarding',
  title: 'Mobile Onboarding Screen',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Main Title (h1)',
      type: 'string',
      description: 'E.g., "Treat yourself."',
    },
    {
      name: 'description',
      title: 'Description text',
      type: 'text',
      rows: 3,
    },
    {
      name: 'buttonText',
      title: 'Button Label',
      type: 'string',
      initialValue: 'Continue',
    },
  ],
};
