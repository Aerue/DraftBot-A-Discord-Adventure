const ItemAbstract = require("entities/ItemAbstract");

class Potion extends ItemAbstract {

    constructor(id, rareness, power, translations, nature) {
        super(id, rareness, power, translations);
        this.nature = nature;
    }

    /**
     * Return string containing a description of an potion
     * @param {string} language - The language the object has to be displayed in
     * @returns {string}
     */
    display(language) {
        let result = this.getTranslation(language);
        result += Config.text[language].potionManager.separator;
        result += Config.text[language].rarities[this.get('rareness')];
        result += Config.text[language].potionManager.separator;
        result += Config.text[language].nature.intro[this.get('nature')];

        if (this.get('nature') !== 0) {
            result += this.get('power') + Config.text[language].nature.outroPotion[this.get('nature')];
        }

        return result;
    }

}

module.exports = Potion;