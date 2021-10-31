const h = (tag, props, children) => {
  //vnode是一個JS物件
  return {
    tag,
    props,
    children
  }
}

const mount = (vnode, container) => {
  //v-node -> element
  //1.創建出真實的元素， 並且在vnode上保留el
  const el = vnode.el = document.createElement(vnode.tag);

  //2.處理props
  if(vnode.props) {
    for ( const key in vnode.props) {
      const value = vnode.props[key];

      if(key.startsWith("on")) {
        el.addEventListener(key.slice(2).toLowerCase())
      } else {
        el.setAttribute(key, value)
      }
    }
  }

  //3.children
  if( vnode.children ) {
    if (typeof vnode.children === "string") {
      el.textContent = vnode.children
    } else {
      vnode.children.forEach(item => {
        mount(item, el)
      })
    }
  }

  //4.將el掛載到container
  container.appendChild(el);
}