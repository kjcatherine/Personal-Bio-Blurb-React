export default function Main(props) {
  return (
    <main className={props.darkMode ? 'dark' : ''}>
      <div className="img--div">
        <img className="img" src="/kate.jpg" alt="image of me" />
        <h1 className="title">KJ's Blurb</h1>
      </div>
      <div className="intro--contain">
        <p className="intro">
          I'm a Software Engineer who builds web applications with a focus on
          responsiveness, exceptional digital experiences and accessibility. I
          have a keen eye for creating and bringing to life accessible
          human-centered web products. Things I've been excited about lately are
          React, TailwindCSS, Node and MongoDB.
        </p>
        <div className="links">
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </main>
  );
}
