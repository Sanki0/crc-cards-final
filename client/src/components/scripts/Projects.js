import React from 'react'
import '../../styles/Projects.scss'

function Projects() {

  const [newProject, setNewProject] = React.useState("");
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    const json = localStorage.getItem('projects');
    const loadedprojects = JSON.parse(json);
    if (loadedprojects) {
      setProjects(loadedprojects);
    }
  }, []);

  React.useEffect(() => {
    const json = JSON.stringify(projects);
    localStorage.setItem('projects', json);
  }, [projects]);

  const GoCRC = (e) => {
    window.location.href = '/crc'
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const project = {
      id: new Date().getTime(),
      text: newProject
    };
    setProjects([...projects].concat(project));
    setNewProject("");
  }


  return (
    <>

      <form className='new_project'>
        <h1>Ingrese nuevo proyecto</h1>
        <input
          type="text"
          onChange={(e) => setNewProject(e.target.value)}
          value={newProject} />
        <button className="button__add" onClick={handleSubmit}>Add Project</button>
      </form>

      <div className='projects_container'>
        <h2>Proyectos:</h2>
        <div className='projects'>
          {projects.map((project) => (

            <div key={project.id} className='project_name'>
              <input type="button" value={project.text} onClick={GoCRC} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export { Projects }