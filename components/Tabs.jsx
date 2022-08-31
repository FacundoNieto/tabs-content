import { useState } from "react";

export default function Tabs() {
  
  const [ToggleState, setToggleState] = useState(1) /*el primer valor de ToggleState será 1*/
  
  const toggleTab = (index) => { /*función que se ejecutará cada vez que se haga click sobre alguna tab */
    setToggleState(index) /*setToggleState hace que ToggleState sea igual a Index */
    // console.log(index)
  }

  return (
    <div className="container">

      <div className="bloc-tabs">

        <button 
          className={ToggleState === 1? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)} //Con esta función "anónima" puedo pasar parámetros, sino no podría saber a qué tab le estoy haciendo click. Cada vez que se clickee esta tab, se llamará a la función toggleTab y se le pasará como parámetro el número correspondiente a esta Tab. 
        >
          Tab 1
        </button>

        <button 
          className={ToggleState === 2? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)} //Con esta función "anónima" puedo pasar parámetros, sino no podría saber a qué tab le estoy haciendo click. Cada vez que se clickee esta tab, se llamará a la función toggleTab y se le pasará como parámetro el número correspondiente a esta Tab. 
        >
          Tab 2
        </button>

        <button 
          className={ToggleState === 3? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)} //Con esta función "anónima" puedo pasar parámetros, sino no podría saber a qué tab le estoy haciendo click. Cada vez que se clickee esta tab, se llamará a la función toggleTab y se le pasará como parámetro el número correspondiente a esta Tab. 
        >
          Tab 3
        </button>

      </div>

      <div className="content-tabs">
        <div 
          className={ToggleState === 1? "content active-content" : "content"}
        >
          <h2>Content 1</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
            vel voluptatum?
          </p>
        </div>

        <div 
          className={ToggleState === 2? "content active-content" : "content"}
        >
          <h2>Content 2</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>

        <div 
          className={ToggleState === 3? "content active-content" : "content"}
        >
          <h2>Content 3</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>

      </div>

    </div>
  );
}