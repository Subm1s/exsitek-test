"use strict";
const changeWords = {
    getWord: function (word) {
        let wordForCheck;
        if (eventButton.code === "Space") {
            wordForCheck = word;
        }
        else {
            wordForCheck = word.slice(0, -1);
        }
        this.removePopup();
        chrome.storage.sync.get("words", ({ words }) => {
            let dictionary = words;
            if (dictionary) {
                findVariant = dictionary.find((el) => el.word.toLocaleLowerCase() === wordForCheck.toLocaleLowerCase());
            }
            if (findVariant) {
                this.createPopup(findVariant.variant);
            }
        });
    },
    createPopup: function (variantList) {
        this.removePopup();
        const buttonWrapper = document.createElement("div");
        buttonWrapper.className = "buttonWrapper";
        replaceElement.after(buttonWrapper);
        variantList.map((el) => {
            const button = document.createElement("button");
            button.className = "buttonVariant";
            button.textContent = el;
            buttonWrapper.appendChild(button);
            button.addEventListener("click", (e) => {
                const targetBtn = e.target;
                this.replaceWord(targetBtn);
            });
        });
    },
    removePopup: function () {
        let btnWrapper = document.querySelector(".buttonWrapper");
        if (btnWrapper) {
            btnWrapper.remove();
        }
    },
    replaceWord: function (btnValue) {
        arrSentences[arrSentences.length - 1] = btnValue.textContent;
        if (replaceElement.tagName === "INPUT" ||
            replaceElement.tagName === "TEXTAREA") {
            const newTarget = replaceElement;
            newTarget.value = arrSentences.join(" ").concat(eventButton.key);
        }
        else if (replaceElement.tagName === "DIV") {
            replaceElement.textContent = arrSentences
                .join(" ")
                .concat(eventButton.key);
        }
        replaceElement.focus();
        this.removePopup();
    },
    replaceSelectWord: function () {
    },
};
let replaceElement;
let eventButton;
let arrSentences;
let findVariant;
let selectionWord = document.getSelection();
let { anchorNode, anchorOffset, focusNode, focusOffset } = selectionWord;
const inputs = Array.from(document.querySelectorAll('input[type="text"]'));
const textareas = Array.from(document.querySelectorAll("textarea"));
const contenteditablesDiv = Array.from(document.querySelectorAll('div[contenteditable="true"]'));
const fieldArr = [...inputs, ...textareas, ...contenteditablesDiv];
const arrOfKey = [
    "Comma",
    "Period",
    "Comma",
    "Semicolon",
    "Semicolon shiftKey",
    "Enter",
    "Slash",
    "Slash shiftKey",
];
for (const element of fieldArr) {
    element.addEventListener("keyup", (e) => {
        if (arrOfKey.includes(e.code)) {
            findElement(e);
        }
    });
    element.addEventListener("keydown", (e) => {
        if (e.code === "Space") {
            findElement(e);
        }
    });
    element.addEventListener("keydown", (e) => {
        if (e.code === "Backspace") {
            changeWords.removePopup();
        }
    });
    element.addEventListener("click", (e) => {
        let range = document.createRange();
        range.selectNode(document.getElementsByTagName("div").item(0));
        let documentFragment = range.cloneContents();
        document.body.appendChild(documentFragment);
})
}
function findElement(e) {
    const target = e.target;
    eventButton = e;
    if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
        arrSentences = target.value.replace("\n", " ").trim().split(" ");
    }
    else if (target.tagName === "DIV") {
        arrSentences = target.textContent.replace("\n", " ").trim().split(" ");
    }
    replaceElement = target;
    changeWords.getWord(arrSentences.at(-1));
}