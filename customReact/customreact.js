function customRender(reactElement, container) {
  const docElement = document.createElement(reactElement.type);
  docElement.innerHTML = reactElement.children;

  for (const prop in reactElement.props) {
    if (prop === "children") {
      docElement.innerHTML = reactElement.props[prop];
    } else {
      docElement.setAttribute(prop, reactElement.props[prop]);
    }
  }

  container.appendChild(docElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to Visit Google",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
