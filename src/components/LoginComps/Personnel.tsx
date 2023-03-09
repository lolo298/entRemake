import {personnel, personnelContent} from "./css";  
export function Personnel(){

  function parentFollowChildLink(e) {
    if (e.target instanceof HTMLElement) {
      const target = e.target.querySelector("a");
      if (!target) throw new Error("No link found");
      window.open(target.href, "_blank");
    }
  }

  return (
    <div id="personnel" css={personnel}>
      <header
        onClick={parentFollowChildLink}
      >
        <a href="https://youtu.be/dQw4w9WgXcQ">Le portail du personnel et des étudiants</a>
      </header>
      <div id="personnel-content" css={personnelContent}>
        <p>Viens découvrir des infos utiles sur la vie de tous les jours !</p>
        <div className="img-container">
          <img
            src="https://images.unsplash.com/photo-1678135487929-0153e7eaf6e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
            alt="image 1"
          />
          <img
            src="https://images.unsplash.com/photo-1677966039656-a681a0fe59b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            alt="image 2"
          />
        </div>
      </div>
    </div>
  );
}