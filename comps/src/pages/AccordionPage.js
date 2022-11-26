import Accordion from '../components/Accordion';

const AccordionPage = () => {

  const items = [
    {
      id: '123',
      label: 'Can I use React in my project?',
      content: 'Yes you can use React in your project.Yes you can use React in your project.Yes you can use React in your project.'
    },
    {
      id: '32',
      label: 'Can I use JavaScript in my project?',
      content: 'Yes you can use React in your project.Yes you can use React in your project.Yes you can use React in your project.'
    },
    {
      id: '24',
      label: 'Can I use CSS in my project?',
      content: 'Yes you can use React in your project.Yes you can use React in your project.Yes you can use React in your project.'
    },
  ]

  return <Accordion items={items} />

}

export default AccordionPage;
