// Fetch and parse the readme content
fetch("README.md")
.then(response => response.text())
.then(data => {
    const sections = data.split("## ").splice(1);

    // Extract and display specific sections
    var about_section = sections[0].trim();
    var experience_section = sections[1].trim();
    var projects_section = sections[2].trim();
    var interests_section = sections[3].trim();
    var elsewhere_section = sections[4].trim();

    // about section
    var about_section_contents = about_section.split("\n").slice(1);
    for (var i = 0; i < about_section_contents.length; i++) {
        document.getElementById("about-section").innerHTML += `<p>${about_section_contents[i]}</p>`;
    }

    // experiences section
    var experience_section_contents = experience_section.split("\n\n").slice(1);
    for (var i = 0; i < experience_section_contents.length; i++) {
        var experience = experience_section_contents[i].split("\n");
        var experience_link = experience[0].split("\"")[1];
        var experience_name = experience[0].split(">")[1].split("<")[0];
        var experience_role = experience[2];
        var experience_objective = experience[4].split(">").pop();
        var notable_title = experience[6].split(":")[0].split(">")[1].toLowerCase();
        var notable_work_list = "";
        for (var j = 8; j < experience.length; j++) {
            var bullet_point = experience[j].split("- ")[1];
            notable_work_list += `<li>${bullet_point}</li>\n`;
        }
        var inner_html = `
        <p class="name"><a href="${experience_link}" target="_blank">${experience_name}</a></p>
        <p class="title"><i>${experience_role}</i></p>
        <span class="notable" onclick="toggle('notableWork${i}')">${notable_title}</span>
        <p class="description">${experience_objective}</p>
        <ul class="notable-work" id="notableWork${i}" onclick="toggle('notableWork${i}')">
            ${notable_work_list}
        </ul>
        `;
        document.getElementById("experiences-section").innerHTML += inner_html;
    }

    // projects section
    var project_section_contents = projects_section.split("\n\n").slice(1);
    for (var i = 0; i < project_section_contents.length; i++) {
        var project = project_section_contents[i].split("<br>");
        var project_name = project[0];
        var project_desc = project[1];
        var project_links = "";
        for (var j = 2; j < project.length; j++) {
            var link = project[j];
            var link_url = link.split("\"")[1];
            var link_name = link.split(">")[1].split("<")[0];
            project_links += `<span><a href="${link_url}" target="_blank" class="notable">${link_name}</a></span>`;
        }
        var inner_html = `
        <h3 class="name">${project_name}</h3>
        ${project_links}
        <p class="description">${project_desc}</p>
        `;
        document.getElementById("projects-section").innerHTML += inner_html;
    }

    // interests section
    var interest_section_contents = interests_section.split("\n\n").slice(1);
    for (var i = 0; i < interest_section_contents.length; i++) {
        var interest = interest_section_contents[i].split("\n");
        var interest_name = interest[0];
        var interest_name_dashed = interest[0].toLowerCase().split(" ").join("-");
        var bullet_points = "";
        for (var j = 1; j < interest.length; j++) {
            var bullet_point = interest[j].split("- ")[1];
            bullet_points += `<p>${bullet_point}</p>`
        }
        var inner_html = `
        <div style="margin-bottom: 15px;">
            <h3 class="interests-title">${interest_name}</h3>
            <span class="notable" onclick="toggle('${interest_name_dashed}')">read more</span>
            <div id="${interest_name_dashed}" class="notable-interests" onclick="toggle('${interest_name_dashed}')">
                ${bullet_points}
            </div>
        </div>
        `;
        document.getElementById("interests-section").innerHTML += inner_html;
    }

    // elsewhere (links) section
    var elsewhere_section_contents = elsewhere_section.split("\n\n").slice(1);
    for (var i = 0; i < elsewhere_section_contents.length; i++) {
        elsewhere_link = elsewhere_section_contents[i].split("\n");
        var relevant_link = elsewhere_link[0].split("\"")[1];
        var relevant_link_name = elsewhere_link[0].split(">")[1].split("<")[0];
        console.log(relevant_link_name);
        var relevant_svg = elsewhere_link[1];
        inner_html = `
        <div class="elsewhere">
            <a href="${relevant_link}" target="_blank">
                ${relevant_svg}
                <span style="margin-left: 5px;">${relevant_link_name}</span>
            </a>
        </div>
        `
        document.getElementById("elsewhere-section").innerHTML += inner_html
    }
})
.catch(error => {
    console.error("WEBSITE ERROR: " + error);
});
