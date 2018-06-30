QUESTION
> 


---
when to use state
> not able to calculate from props
> use in render method

sepearte logic and presentation
> In general, the right path to follow is starting with a single component and splitting it only when the logic and the presentation become too coupled where they shouldn't.
> Container components:
  - They are more concerned about the behavior
  - They render their presentational components
  - They make API calls and manipulate data
  - They define event handlers
  - They are written as classes
> Presentational components: -> apply storybook for disply
  - They are more concerned with the visual representation
  - They render the HTML markup (or other components)
  - They receive data from the parents in the form of props
  - They are often written as stateless functional components

> Performance: babel plugin
  - transform-react-inline-elements
  - transform-react-constant-elements

> Anti-Patterns to Be Avoided
  - Initializing the state using props
    : duplicated source will make it unclear
    : prop change wont pass to state -> naming as initialValue to amke this more clear
  - Mutating the state without using setState
    : The state changes without making the component re-render
    : Whenever setState gets called in future, the mutated state gets applied
    : severe impact on performance
  - Using indexes as a key
    : index is not binding with content
  - Spreading props on DOM elements
    : risk of adding unknown HTML attributes -> use domProps <div {...props.domProps} />