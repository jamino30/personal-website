const project = document.createElement('template');

function createProject(title, github, description, skills, image) {
    return `
    <div class="col-lg-6 col-sm-12 mt-3">
        <div class="project-card" id="project-0">
            <div class="image gatsby-image-wrapper" style="position: relative; overflow: hidden; max-height: 85%;">
            <div style="width: 100%; padding-bottom: 62.5%;"></div><img src="/images/navifile-demo.png"
                alt=${title}
                style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: contain; object-position: center center; opacity: 0; transition-delay: 500ms;">
            <picture>
                <source srcset="
                ${image} 500w,
                ${image} 1000w,
                ${image} 2000w,
                ${image} 3000w,
                ${image} 3360w" sizes="(max-width: 2000px) 100vw, 2000px">
                <img sizes="(max-width: 2000px) 100vw, 2000px" srcset="
                ${image} 500w,
                ${image} 1000w,
                ${image} 2000w,
                ${image} 3000w,
                ${image} 3360w" src=${image} alt=${title} loading="lazy"
                style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: contain; object-position: center center; opacity: 1; transition: opacity 500ms ease 0s;">
            </picture>
            </div>
            <div class="image-overlay">
            <div class="image-overlay-text">
                <p class="project-title">${title}</p>
                <a class="project-links" href=${github}
                target="__blank">github</a>
                <p class="project-desc">${description}</p>
                <ul class="project-tools">
                    <li>${skills[0]}</li>
                    <li>${skills[1]}</li>
                    <li>${skills[2]}</li>
                </ul>
            </div>
            </div>
        </div>
    </div>`;
}

function createRow(project1, project2) {
    project.innerHTML = `<div class="row">${project1 + project2}</div>`;

    p = document.getElementById('projects-section');
    p.append(project.content);
}

/*

Personal Projects can be appended/removed below.

*/

const clip = createProject(
    'CLIP',
    'https://www.github.com/jamino30/CLIP',
    'A Composite Layering Image Processor (CLIP) that allows users to interactively load, process, alter, and save image data.',
    ['Java', 'Swing', 'JUnit'],
    'images/clip-demo.png'
);

const keyboard_app_launcher = createProject(
    'Keyboard App Launcher',
    'https://www.github.com/jamino30/Keyboard-App-Launcher',
    'A macOS software that serves as a keyboard application launcher and provides productivity workflow support for media players, dictionaries, file system navigation, etc.',
    ['Python', 'Web APIs', 'Tkinter'],
    'images/keyboard-app-launcher-demo.png'
);

const bridges_game = createProject(
    'Bridges Game',
    'https://www.github.com/jamino30/Bridges-Game',
    'A Java Bridg-It game built with javalib library that utilizes Breadth-first search (BFS) to determine the game winner.',
    ['Java', 'javalib', 'Tester'],
    'images/bridges-game-demo.png'
);

const file_management_tool = createProject(
    'File Mangagement Tool',
    'https://www.github.com/jamino30/File-Management-Tool',
    'A file system management tool that organizes files/directories (and subdirectories) based on its hexadecimal signatures.',
    ['Python', 'Docker', 'os'],
    'images/file-management-tool-demo.png'
);

const personal_website = createProject(
    'Personal Website',
    'https://www.github.com/jamino30/v1',
    'A personal websiste built using HTML, CSS, and Netfliy deployment that showcases personal projects and experiences.',
    ['JavaScript', 'HTML', 'CSS'],
    'images/light-demo.png'
);

createRow(clip, keyboard_app_launcher);
createRow(bridges_game, file_management_tool);
createRow(personal_website, '');
