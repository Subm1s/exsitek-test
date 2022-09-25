declare const changeWords: {
    getWord: (word: string) => void;
    createPopup: (variantList: string[]) => void;
    removePopup: () => void;
    replaceWord: (btnValue: HTMLButtonElement) => void;
};
declare let replaceElement: HTMLElement;
declare let eventButton: KeyboardEvent;
declare let arrSentences: string[];
declare let findVariant: {
    word: string;
    variant: string[];
};
declare let selectionWord: Selection;
declare let anchorNode: Node, anchorOffset: number, focusNode: Node, focusOffset: number;
declare const inputs: HTMLInputElement[];
declare const textareas: HTMLTextAreaElement[];
declare const contenteditablesDiv: HTMLDivElement[];
declare const fieldArr: (HTMLTextAreaElement | HTMLDivElement)[];
declare const arrOfKey: string[];
declare function findElement(e: KeyboardEvent): void;
