const Layout = (props) => {
    console.log(props)
    
    return (
      <div>
        <header>
          <a href='/'>{props.test}</a>
        </header>
  
        <nav>
          <ol>
            <li><a href='/read/1'>html</a></li>
            <li><a href='/read/2'>css</a></li>
          </ol>
        </nav>
        <article>
          <h2>hello</h2>
          hello,worlddd
        </article>
        <ul>
          <li><a href='/create'>create</a></li>
          <li><a href='/update'>update</a></li>
          <li><a href='/delete'>delete</a> </li>
  
        </ul>
  
        {props.children}
      </div>
    )
  }
  

export default Layout