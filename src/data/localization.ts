const eng = {
    "Title": "ExCap Documentation",
    "Headings": {
        "ConditionalMethods": "ProviderConditional Methods",
        "SkillMethods": "The following methods below are used to build Skill based Provider Conditionals",
        "WeaponMethods": "The following methods below are used to build Weapon based Provider Conditionals",
        "MiscMethods": "Misc Methods for Required Types",
        "Types": "Provider Conditional Types"
    },
    "Text": {
        "TutorialConditional": "To make a ProviderConditional you use the ProviderConditional.Builder. This class is in charge of constructing a ProviderConditional without the hassle of using a constructor and makes the code easier and more intitutive to pick up for other newer modders. A static method in ProviderConditional.class called ProviderConditional.builder() is meant to create said builder before calling .build() to complete and create the conditional.",
    },
    "Code": {
        "ProviderConditional": "An all in one conditional to determine what wield style the player will get when they equip an ExCap weapon, ExCap weapons always use a provider conditional to determine what wield style and whether an item would be visible when it's in the off hand. So therefore, to make a moveset, you will need to make a Provider that points to said moveset in the ExCap weapon, or else your moveset would not even be returned by the built-in provider."
        
    },
    "Examples": {
        "ProviderExample": " public static ProviderConditional default1HWieldStyle = ProviderConditional.builder().setType(ProviderConditionalType.DEFAULT).setWieldStyle(CapabilityItem.Styles.ONE_HAND).isVisibleOffHand(true).build();"
    }
}

export default eng;