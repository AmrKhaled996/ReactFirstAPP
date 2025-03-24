
import { CORE_CONCEPTS, EXAMPLES } from "./data"

import './App.css'
import Header from "./components/Header"
import CoreConcept from "./components/CoreConcept"
import TabButton from "./components/TabButton"
import { useState } from "react"








function App() {

  const [selectedTopic, setSelectedTopic] = useState()

  function handlerButton( selectedButten ) {
  
    setSelectedTopic(selectedButten);
    console.log(selectedTopic);
    

 }
 let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }


  return (
    <div>
      <Header />
      <main>
      </main>
      <section id="core-concepts">
        <h2>core concepts</h2>
        
        <ul>
          <CoreConcept {...CORE_CONCEPTS[0]}/>
          <CoreConcept {...CORE_CONCEPTS[1]}/>
          <CoreConcept {...CORE_CONCEPTS[2]}/>
          <CoreConcept {...CORE_CONCEPTS[3]}/>
        </ul>
      </section>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
        <TabButton
              isSelected={selectedTopic === 'components'}
              onSelect={() => handlerButton('components')}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'jsx'}
              onSelect={() => handlerButton('jsx')}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'props'}
              onSelect={() => handlerButton('props')}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'state'}
              onSelect={() => handlerButton('state')}
            >
              State
            </TabButton>
        </menu>
        {tabContent}
      </section>
    </div>
  );
}

export default App;