

const root = document.querySelector(".root")

function elementCreator(element, location) {
  const ele = document.createElement(element.type)
  location.append(ele)
  ele.innerHTML = element.Children
  ele.setAttribute("id", element.props.id)
  ele.setAttribute("class", element.props.class)

}


const reactElement = {
  type: "p",
  props: {
    id: "firstPara",
    class: "paraClass"
  },
  Children: "This is the para text"
}

elementCreator(reactElement, root)