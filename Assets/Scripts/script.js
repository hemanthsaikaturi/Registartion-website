// Comment script.js in index.html
// Uncomment .registration-closed 
// Comment .please-wait 
// Uncomment css in .partcipants


// var teamSize = 1; // Original default value
var teamSize = 2; // Modified default value to minimum 2 participants
let teamSizes;
var msg = document.querySelector(".msg");
let submitButton = document.querySelector(".submit");

function createSpanPoints(numParticipants) {
    const spanPoints = document.querySelector(".span-slider");
    spanPoints.innerHTML = "";
    for (var i = 1; i <= numParticipants; i++) {
        const span = `<a href="#participant-${i}" ><div class="span"></div></a>`;
        spanPoints.innerHTML = spanPoints.innerHTML + span;
    }
    spanPoints.innerHTML =
        spanPoints.innerHTML +
        `<a href="#participant-5"><div class="span"></div></a></div>`;
}

// Dropdown Menu Team size
document.querySelectorAll(".dropdown").forEach(function (dropdown) {
    dropdown.addEventListener("click", function () {
        this.setAttribute("tabindex", 1);
        this.classList.toggle("active");
        var dropdownMenu = this.querySelector(".dropdown-menu");
        dropdownMenu.style.display =
            dropdownMenu.style.display === "block" ? "none" : "block";
    });

    dropdown.addEventListener("focusout", function () {
        this.classList.remove("active");
        this.querySelector(".dropdown-menu").style.display = "none";
    });

    dropdown.querySelectorAll(".dropdown-menu li").forEach(function (item) {
        item.addEventListener("click", function () {
            var dropdown = this.closest(".dropdown");
            teamSize = this.textContent;
            createParticipantSections(teamSize);
            dropdown.querySelector("span").textContent =
                "Team size : " + this.textContent;
            dropdown.style.color = "black";
            dropdown
                .querySelector("input")
                .setAttribute("value", this.getAttribute("id"));
        });
    });
});

async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// Function to generate the virtual DOM for participants
function createParticipantSections(numParticipants) {
    // Ensure numParticipants is between 2 and 3
    // Added validation to ensure minimum 2 and maximum 3 participants
    if (numParticipants < 2) numParticipants = 2;
    if (numParticipants > 3) numParticipants = 3;
    
    const participantsContainer = document.querySelector(".participants");

    participantsContainer.innerHTML = "";

    for (let i = 1; i <= numParticipants; i++) {
        const participantSection = document.createElement("div");
        participantSection.classList.add(`participant-${i}`, `participant`);
        participantSection.id = `participant-${i}`;

        participantSection.innerHTML = `
        <label class="participant-label">Participant ${i}:</label>
        <div class="fields">
            <div class="row">
                <div class="col-sm-6">
                    <div class="form__group field">
                        <input type="text" class="form__field" placeholder="Name"
                            name="participant-${i}-name" id="p${i}f0" required="">
                        <label for="p${i}f0" class="form__label">Name</label>
                    </div>
                    <p id="p${i}w0" class="war">Enter valid Name</p>
                </div>
                <div class="col-sm-6">
                    <div class="form__group field">
                        <input type="text" class="form__field" placeholder="College Name"
                             name="participant-${i}-college"
                            id="p${i}f7" required="">
                        <label for="p${i}f7" class="form__label">College Name</label>
                    </div>
                    <p id="p${i}w7" class="war">Enter valid College Name</p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4">
                    <div class="form__group field">
                        <div class="dropdown1 form__field">
                            <div class="select">
                                <span name="Year" class="choice">Year </span>
                                <i class="fa fa-chevron-down"></i>
                            </div>
                            <input id="p${i}f2" value="" type="hidden" name="Year">
                            <ul class="dropdown-menu1">
                                <li id="2">2</li>
                                <li id="3">3</li>
                                <li id="4">4</li>
                            </ul>
                        </div>
                    </div>
                    <p id="p${i}w2" class="war">Select valid Year</p>
                </div>
                <div class="col-sm-4">
                    <div class="form__group field">
                        <div class="dropdown1 form__field">
                            <div class="select">
                                <span name="Branch" class="choice">Branch </span>
                                <i class="fa fa-chevron-down"></i>
                            </div>
                            <input id="p${i}f4" value="" type="hidden" name="Branch">
                            <ul class="dropdown-menu1">
                                <li id="CIVIL">CIVIL</li>
                                <li id="CSB">CSB</li>
                                <li id="CSC">CSC</li>
                                <li id="CSD">CSD</li>
                                <li id="CSE">CSE</li>
                                <li id="CSM">CSM</li>
                                <li id="ECE">ECE</li>
                                <li id="EEE">EEE</li>
                                <li id="IT">IT</li>
                                <li id="MECH">MECH</li>
                                <li id="OTHERS">OTHERS</li>
                            </ul>
                        </div>
                    </div>
                    <p id="p${i}w4" class="war">Select valid Branch</p>
                </div>
                <div class="col-sm-4">
                    <div class="form__group field">
                        <div class="dropdown1 form__field">
                            <div class="select">
                                <span name="Section" class="choice">Section </span>
                                <i class="fa fa-chevron-down"></i>
                            </div>
                            <input id="p${i}f5" value="" type="hidden" name="Section">
                            <ul class="dropdown-menu1">
                                <li id="A">A</li>
                                <li id="B">B</li>
                                <li id="c">C</li>
                                <li id="D">D</li>
                                <li id="OTHERS">OTHERS</li>
                            </ul>
                        </div>
                    </div>
                    <p id="p${i}w5" class="war">Select valid Section</p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4">
                    <div class="form__group field">
                        <input type="text" class="form__field" placeholder="Roll No"
                            name="participant-${i}-roll-no" id="p${i}f3" required="">
                        <label for="p${i}f3" class="form__label">Roll No.</label>
                    </div>
                    <p id="p${i}w3" class="war">Enter valid Roll No</p>
                </div>
                <div class="col-sm-4">
                    <div class="form__group field">
                        <input type="email" class="form__field" placeholder="Email"
                             name="participant-${i}-email"
                            id="p${i}f1" required="">
                        <label for="p${i}f1" class="form__label">Email</label>
                    </div>
                    <p id="p${i}w1" class="war">Enter valid Email</p>
                </div>
                <div class="col-sm-4">
                    <div class="form__group field">
                        <input type="text" class="form__field" placeholder="Phone No"
                         name="participant-${i}-phone-no"
                            id="p${i}f6" required="">
                        <label for="p${i}f6" class="form__label">Phone No.</label>
                    </div>
                    <p id="p${i}w6" class="war">Enter valid Phone No</p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4">
                    <div class="form__group field">
                        <div class="dropdown1 form__field">
                            <div class="select">
                                <span name="Member" class="choice">Are you a member of IEEE</span>
                                <i class="fa fa-chevron-down"></i>
                            </div>
                            <input id="p${i}f8" value="" type="hidden" name="Member">
                            <ul class="dropdown-menu1">
                                <li id="Yes">Yes</li>
                                <li id="No">No</li>
                            </ul>
                        </div>
                    </div>
                    <p id="p${i}w8" class="war">Select valid option</p>
                </div>
                <div class="col-sm-4">
                    <div class="form__group field">
                        <input type="text" class="form__field" placeholder="Membership ID"
                             name="participant-${i}-email"
                            id="p${i}f9" required="">
                        <label for="p${i}f9" class="form__label">Membership ID</label>
                    </div>
                    <p id="p${i}w9" class="war">Enter valid membership id</p>
                </div>
                <div class="col-sm-4">
                    <div class="form__group field">
                        <div class="dropdown1 form__field">
                            <div class="select">
                                <span name="Interest" class="choice">Which session are you most excited about? </span>
                                <i class="fa fa-chevron-down"></i>
                            </div>
                            <input id="p${i}f10" value="" type="hidden" name="Interest">
                            <ul class="dropdown-menu1" style="z-index: 100">
                                <li id="Graphic design">Graphic design</li>
                                <li id="UI/UX Design">UI/UX Design</li>
                                <li id="Both">Both</li>
                            </ul>
                        </div>
                    </div>
                    <p id="p${i}w10" class="war">Select valid Section</p>
                </div>
            </div>
        </div>
      `;

        participantsContainer.appendChild(participantSection);
    }
    participantsContainer.innerHTML =
        participantsContainer.innerHTML +
        `<div class="participant-1 participant" id="participant-5">
    <div class="row">
        
        <div class="col-sm-12">
                    <div class="form__group fields que">
                    <p>Rate your designing skills on a scale of 10.</p>
                        <div class="dropdown1 form__field">
                            <div class="select">
                                <span name="Scale" class="choice">Scale</span>
                                <i class="fa fa-chevron-down"></i>
                            </div>
                            <input id="q1" value="" type="hidden" name="Scale">
                            <ul class="dropdown-menu1">
                                <li id="10">10</li>
                                <li id="9">9</li>
                                <li id="8">8</li>
                                <li id="7">7</li>
                                <li id="6">6</li>
                                <li id="5">5</li>
                                <li id="4">4</li>
                                <li id="3">3</li>
                                <li id="2">2</li>
                                <li id="1">1</li>
                            </ul>
                        </div>
                    </div>
                    <p id="q1w" class="war qw">Select a valid number</p>
                </div>
    </div>
    <div class="row">
        <div class="col-sm-12">
            <div class="form__group fields que1">
                <p>Why do you want to participate in DesignX 2.0?</p>
                <input type="text" id="q2" class="form__field que1"
                    placeholder="Why do you want to participate in DesignX 2.0?" required="">
                <!-- <label for="p2f6" class="form__label">How do you think this workshop will benefit
                    your understanding of the image processing techniques?</label> -->
            </div>
            <p id="q2w" class="war qw">Enter valid Answer</p>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-12">
                    <div class="form__group fields que">
                    <p>Do you have any prior experience in graphic design or UI/UX?</p>
                        <div class="dropdown1 form__field">
                            <div class="select">
                                <span name="Experience" class="choice">Experience</span>
                                <i class="fa fa-chevron-down"></i>
                            </div>
                            <input id="q3" value="" type="hidden" name="Scale">
                            <ul class="dropdown-menu1">
                                <li id="Yes">Yes</li>
                                <li id="No">No</li>
                            </ul>
                        </div>
                    </div>
                    <p id="q3w" class="war qw">Select a valid number</p>
                </div>
    </div>
</div>
</div>`;
    //Dropdown for others
    document.querySelectorAll(".dropdown1").forEach(function (dropdown1) {
        dropdown1.addEventListener("click", function () {
            this.setAttribute("tabindex", 1);
            this.classList.toggle("active");
            var dropdownMenu1 = this.querySelector(".dropdown-menu1");
            dropdownMenu1.style.display =
                dropdownMenu1.style.display === "block" ? "none" : "block";
        });

        dropdown1.addEventListener("focusout", function () {
            this.classList.remove("active");
            this.querySelector(".dropdown-menu1").style.display = "none";
        });

        dropdown1
            .querySelectorAll(".dropdown-menu1 li")
            .forEach(function (item) {
                item.addEventListener("click", function () {
                    var dropdown1 = this.closest(".dropdown1");
                    var choice = dropdown1
                        .querySelector(".choice")
                        .getAttribute("name");
                    dropdown1.querySelector("span").innerHTML =
                        `${choice} : ` +
                        `<span class="selection">${this.textContent}</span>`;
                    dropdown1
                        .querySelector("input")
                        .setAttribute("value", this.getAttribute("id"));
                });
            });
    });
    createSpanPoints(numParticipants);
}

// createParticipantSections(1); // Original call with default value 1
createParticipantSections(2); // Modified call with default value 2

const firebaseConfig = {
    apiKey: config.API_KEY,
    authDomain: config.AUTH_DOMAIN,
    projectId: config.PROJECT_ID,
    storageBucket: config.STORAGE_BUCKET,
    messagingSenderId: config.MESSAGE_SENDER_ID,
    appId: config.APP_ID,
    measurementId: config.MESSUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });
const teams = db.collection("RSMTeams");
const mail = db.collection("RSMMails");

document.querySelector(".submit").addEventListener("click", async (e) => {
    submitButton.style.display = "none";
    e.preventDefault();
    let emails = [];
    let users = [];
    for (let m = 1; m <= teamSize; m++) {
        emails.push(document.querySelector(`#p${m}f1`).value.toLowerCase());
        users.push(document.querySelector(`#p${m}f0`).value);
    }

    let dict = {
        0: "name",
        1: "email",
        2: "year",
        3: "rollno",
        4: "branch",
        5: "sec",
        6: "phno",
        7: "college",
        8: "Membership",
        9: "Membership ID",
        10: "Interest",
    };
    var data = {};
    for (let i = 1; i <= teamSize; i++) {
        for (let j = 0; j <= 10; j++) {
            let values;
            document
                .querySelector(`#p${i}w${j}`)
                .classList.remove("war-active");
            if (document.querySelector(`#p${i}f${j}`).value == "" && j!= 9) {
                document
                    .querySelector(`#p${i}w${j}`)
                    .classList.add("war-active");
                var flag = 1;
            }
            if (j == 3 || j == 4 || j == 5 || j == 7) {
                values = document
                    .querySelector(`#p${i}f${j}`)
                    .value.toUpperCase();
            } else {
                values = document
                    .querySelector(`#p${i}f${j}`)
                    .value.toLowerCase();
            }
            if (j == 3) {
                if (values.length != 10) {
                    document
                        .querySelector(`#p${i}w${j}`)
                        .classList.add("war-active");
                    var flag = 1;
                }
            }
            if (j == 1) {
                if (
                    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                        values
                    )
                ) {
                    document
                        .querySelector(`#p${i}w${j}`)
                        .classList.add("war-active");
                    var flag = 1;
                }
            } else if (j == 6) {
                if (!/^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/.test(values)) {
                    document
                        .querySelector(`#p${i}w${j}`)
                        .classList.add("war-active");
                    var flag = 1;
                }
            }
            data[`p${i}${dict[j]}`] = values;
        }
    }
    for (let x = 1; x <= 3; x++) {
        let ans = document.querySelector(`#q${x}`).value;
        document.querySelector(`#q${x}w`).classList.remove("war-active");
        if (ans == "") {
            document.querySelector(`#q${x}w`).classList.add("war-active");
            var flag = 1;
        } else {
            data[`a${x}`] = ans;
        }
    }
    if (flag) {
        submitButton.style.display = "inline-block";
        return;
    }
    await teams
        .add({
            teamSize: teamSize,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then((doc) => {
            localStorage.setItem("teamId", doc.id);
        });
    let teamId = localStorage.getItem("teamId");
    data["docId"] = teamId;
    if (users[1]) {
        users[0] = users[0] + " " + "and" + " " + users[1];
    }
    teams.doc(teamId).set(data, { merge: true });
    await mail.doc(teamId).set({
        to: emails,
        message: {
            // attachments: [
            //     {
            //         filename: 'invitaion.pdf',
            //         href: 'https://firebasestorage.googleapis.com/v0/b/codequest-7ac27.appspot.com/o/invitation.pdf?alt=media',

            //     }
            // ],
            //formatting doc can be found in ../Scripts/mail.html
            subject: "CONFIRMATION MAIL FOR DESIGNX 2.0 | IEEE - VBIT SB",
            html: `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title></title>
      </head>
      <body>
          <p>Dear ${users[0]},</p>
          <div>
            <div>Greetings from Resource and Skill Management team | IEEE - VBIT SB.</div>
            <div><br></div>
            <div>Congratulations!</div>
            <div><br></div>
            <div><b>"Success occurs at the convergence of diligence and opportunity."</b></div>
            <div><br></div>
            <div>We are excited to inform that you have successfully registered for the two-day event, "DesignX 2.0".
            </div>
            <div><br></div>
            <div>Kindly refer to the following details of the event.</div>
            <div><br></div>
            <div><b>Day-1:</b></div>
            <div><b><br></b></div>
            <div><b>Date:</b> 27th September, 2024.</div>
            <div><b>Time:</b> 10:00 AM to 4:20 PM.</div>
            <div><b>Venue:</b> Nalanda Auditorium, Vignana Bharathi Institute of Technology.</div>
            <div><br></div>
            <div>You will be introduced to foundational principles of Graphic Design and UI/UX methodologies.</div>
            <div><br></div>
            <div><b>Day-2: </b></div>
            <div><b><br></b></div>
            <div><b>Date:</b> 28th September, 2024.</div>
            <div><b>Time:</b> 10:00 AM to 4:20 PM.</div>
            <div><b>Venue:</b> Nalanda Auditorium, Vignana Bharathi Institute of Technology.</div>
            <div><br></div>
            <div>You will participate in a competition focused on the design of a poster and 
                user-centric, visually compelling interfaces.</div>
            <div><br></div>
            <div>This event facilitates an opportunity to augment your understanding of latest design trends and practices, 
                gaining valuable skills to develop seamless, intuitive user experiences.</div>
            <div><br></div>
            <div>Download the resources from the provided link: https://bit.ly/DesignX_Resources</div>
            <div><br></div>
            <div><b>Note:</b> </div>
            <div>1. There is no registration fee.</div>
            <div>2. Mode of Participation: Individual.</div>
            <div>3. Laptop is required for everyone.</div>
            <div>4. Limited registrations only.</div>
            <div><br></div>
            <div>In case of any queries, contact us at:</div>
            <div>Venkata Ramana: +91 73306 45050</div>
            <div>Sai Kumar: +91 83285 18468</div>
            <div><br></div>
            <div>For further information, kindly visit our website:</div>
            <div><i>https://ieeevbitsb.in/</i></div>
            <div><br></div>
            <div>Follow us on social media for the latest updates.</div>
            <div><b>Instagram:</b><i> https://instagram.com/ieee_vbitsb</i></div>
            <div><b>Facebook:</b><i> https://www.facebook.com/ieeevbitsb/</i></div>
            <div><b>LinkedIn:</b> <i>https://www.linkedin.com/company/ieee-vbit-sb/</i></div>
            <div><br></div>
            <div>Thank you.</div>
            <div><br></div>
            <div><b>Regards,</b></div>
            <div><b>Team RSM.</b></div>
        </div>
        <div><br></div>
    </div>
      </body>
      </html>`,
        },
    });
    msg.style.opacity = 1;
    localStorage.clear;
    window.location.href = "About.html";
});

// Todo:
// if question field is Text :
// <div class="row">
//   <div class="col-sm-8">
//               <div class="form__group fields que">
//                   <p>Rate your expertise in solving problems based on electric circuits.
//                   </p>
//                   <input type="text" id="q1" class="form__field que" placeholder="Do you have any prior experience with the tools of MATLAB?
//                   " required="" fdprocessedid="wgvzlr">
//                   <!-- <label class="form__label">Do you have any prior experience with the tools of
//                       MATLAB?
//                   </label> -->
//               </div>
//               <p id="q1w" class="war qw">Enter valid Answer</p>
//   </div >
// </div>
// if question field is dropdown
// <div class="col-sm-12">
//                     <div class="form__group fields que">
//                     <p>Rate your expertise in solving problems based on electric circuits.</p>
//                         <div class="dropdown1 form__field col-sm-4">
//                             <div class="select">
//                                 <span name="Scale" class="choice">Scale</span>
//                                 <i class="fa fa-chevron-down"></i>
//                             </div>
//                             <input id="q1" value="" type="hidden" name="Scale">
//                             <ul class="dropdown-menu1">
//                                 <li id="1">1</li>
//                                 <li id="2">2</li>
//                                 <li id="3">3</li>
//                                 <li id="4">4</li>
//                                 <li id="5">5</li>
//                             </ul>
//                         </div>
//                     </div>
//                     <p id="q1w" class="war qw">Select a valid number</p>
//                 </div>
//     </div>