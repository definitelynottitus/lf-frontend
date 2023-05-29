import React from 'react'
import { Container, Title, Accordion, createStyles, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    minHeight: 650,
  },

  title: {
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
  },

  item: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

export default function AccordionItem(props) {
  const { classes } = useStyles();
  const items = props.content?.map((item) => (
    <Accordion.Item value={item._uid} key={item.title} className={classes.item}>
        <Accordion.Control>
          {item.title}
        </Accordion.Control>
        <Accordion.Panel>
          {item.answer}
        </Accordion.Panel>
      </Accordion.Item>
  ));

  return (
    <Container size="sm" className={classes.wrapper}>
      <Title align="center" className={classes.title}>
        Frequently Asked Questions
      </Title>
      <Accordion variant='separated' radius="md">{items}</Accordion>
    </Container>
    
  )
}

