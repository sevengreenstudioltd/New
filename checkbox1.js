const div1 = document.querySelector(".div1");
const div2 = document.querySelector(".div2");

const aids = document.querySelector(".aids");
const cse = document.querySelector(".cse");
const cseit = document.querySelector(".cseit");
const me = document.querySelector(".me");
const eee = document.querySelector(".eee");
const ece = document.querySelector(".ece");
const civil = document.querySelector(".civil");
const mde = document.querySelector(".mde");
const robotics = document.querySelector(".robotics");

const dayscholar = document.querySelector(".dayscholar");
const hosteler = document.querySelector(".hosteler");

div1.addEventListener("click", event => {
    input1 = event.target.dataset.id;
    if (input1 == "aids") {
        cse.checked = false;
        cseit.checked = false;
        me.checked = false;
        eee.checked = false;
        ece.checked = false;
        civil.checked = false;
        mde.checked = false;
        robotics.checked = false;
    }
    else if (input1 == "cse") {
        aids.checked = false;
        cseit.checked = false;
        me.checked = false;
        eee.checked = false;
        ece.checked = false;
        civil.checked = false;
        mde.checked = false;
        robotics.checked = false;
    }
    else if (input1 == "cseit") {
        aids.checked = false;
        cse.checked = false;
        me.checked = false;
        eee.checked = false;
        ece.checked = false;
        civil.checked = false;
        mde.checked = false;
        robotics.checked = false;
    }
    else if (input1 == "me") {
        aids.checked = false;
        cse.checked = false;
        cseit.checked = false;
        eee.checked = false;
        ece.checked = false;
        civil.checked = false;
        mde.checked = false;
        robotics.checked = false;
    }
    else if (input1 == "eee") {
        aids.checked = false;
        cse.checked = false;
        cseit.checked = false;
        me.checked = false;
        ece.checked = false;
        civil.checked = false;
        mde.checked = false;
        robotics.checked = false;
    }
    else if (input1 == "ece") {
        aids.checked = false;
        cse.checked = false;
        cseit.checked = false;
        me.checked = false;
        eee.checked = false;
        civil.checked = false;
        mde.checked = false;
        robotics.checked = false;
    }
    else if (input1 == "civil") {
        aids.checked = false;
        cse.checked = false;
        cseit.checked = false;
        me.checked = false;
        eee.checked = false;
        ece.checked = false;
        mde.checked = false;
        robotics.checked = false;
    }
    else if (input1 == "mde") {
        aids.checked = false;
        cse.checked = false;
        cseit.checked = false;
        me.checked = false;
        eee.checked = false;
        ece.checked = false;
        civil.checked = false;
        robotics.checked = false;
    }
    else if (input1 == "robotics") {
        aids.checked = false;
        cse.checked = false;
        cseit.checked = false;
        me.checked = false;
        eee.checked = false;
        ece.checked = false;
        civil.checked = false;
        mde.checked = false;
    } 2
});

div2.addEventListener("click", event => {
    input2 = event.target.dataset.id;
    if (input2 == "dayscholar") {
        hosteler.checked = false;
    }
    else if (input2 == "hosteler") {
        dayscholar.checked = false;
    }
});

const value = document.querySelector(".name");

setTimeout("Go",5000);

function Go()
{
    value.innerHTML.value = "AjaySaagar";
}