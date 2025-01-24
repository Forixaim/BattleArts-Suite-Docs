

class values
{
    private static lang = "en"

    static cycleLanguages = () =>
    {
        if (this.lang == "en")
            this.lang = "meme"
    }

    static getLang = () =>
    {
        return this.lang
    }

}

export default values;