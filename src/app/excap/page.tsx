import { NextPage } from "next";
import NavBar from "@/components/navbar";
import excapModule from "./excap.module.css"
import localization from "@/data/localization";

const code = (name:string, description:string) => 
{
    return (
        <div className="m-4 focus:text-2xl transition-all">
            <code className={excapModule.code}>
                {name}
            </code>
            <p className="indent-8">
                {description}
            </p>
        </div>
    )
}

const ExCapDocs:NextPage = () =>
{
    return (
        <div>
            <header>
                <NavBar/>
            </header>
            <div className="p-16 text-6xl flex items-center justify-center w-full">
                <h1 className={excapModule.title}>
                    Hi
                </h1>
            </div>
            <div className="m-8 p-4 bg-slate-700 rounded-xl">
                {code("ProviderConditional", "An all in one conditional to determine what wield style the player will get when they equip an ExCap weapon")}
                <p>To make a <code className={excapModule.code}>ProviderConditional</code> you use the <code className={excapModule.code}>ProviderConditional.Builder</code>. This class is in charge of constructing a <code className={excapModule.code}>ProviderConditional</code> without the hassle of using a constructor and makes the code easier and more intitutive to pick up for other newer modders. A static method in <code className={excapModule.code}>ProviderConditional.class</code> called <code>ProviderConditional.builder()</code> is meant to create said builder before calling <code>.build()</code> to complete and create the conditional.</p>
                <h3 className="text-4xl flex m-4 justify-center">A list of ProviderConditional Methods</h3>
                {code("setWieldStyle(Style)", "This method sets the final Wield Style that the provider conditional will give when its conditions are all satisified.")}
                {code("isVisibleOffHand(boolean)", "This method looks at whether a weapon is visible in the Off Hand Slot when you are wielding said weapon.")}
                {code("setType(ProviderConditionalType)", "Sets what type will the Provider Conditional be, defaults to DEFAULT.")}
                <h4 className="text-3xl flex m-4 justify-center">The following methods below are used to build Skill based Provider Conditionals</h4>
                {code("setSkillToCheck(Skill)", "This method sets the skill that a Skill Provider would check for.")}
                {code("setKey(SkillDataKey<Boolean>)", "This checks for what Skill Data Key (Namely a Boolean Key) to check for, only Boolean Keys are accepted.")}
                {code("setSlot(SkillSlot)", "This sets the Provider Conditional what specific skill slot to check the skill for.")}
                <h4 className="text-3xl flex m-4 justify-center">The following methods below are used to build Weapon based Provider Conditionals</h4>
                {code("setWeapon(Item)", "Sets the specific weapon to check for, like what Item it is.")}
                {code("setCategory(WeaponCategory)", "Sets what weapon category the provider shoulc check the weapon.")}
                {code("setHand(InteractionHand)", "Sets which hand to check for doing weapon checks. At this point, you must specify what hand in your weapon based Providers. In v7.4 this will be defualted to InteractionHand.OFF_HAND")}
                <h4 className="text-3xl flex m-4 justify-center">Misc Methods for Required Types</h4>
                {code("setProviderConditionals(ProviderConditional...)", "Specify what provider conditionals will be added to this Composite provider conditional. They don't need to have a style or visible off hand set since they only return a true/false value.")}
                {code("setCustomFunction(Function<LivingEntityPatch<?>, Boolean)", "Sets what custom function will be run when the provider is set to Custom. In v7.4 this will be replaced with a Predicate<LivingEntityPatch<?>")}
                <h4 className="text-3xl flex m-4 justify-center">Provider Conditional Types</h4>
                <p className="text-lg indent-8">ProviderConditionalType is an Enumerator, which means that the types are rather fixed and it determines what the Provider Conditional will do when the provider conditional is fired. The number beside the type determines priority, provider conditionals are sorted by priority, so higher priority condiitonals will go first.</p>
                {code("DEFAULT (0)", "The default type, often placed last.")}
                {code("WEAPON_CATEGORY (1)", "A selected InteractionHand check for Weapon Category.")}
                {code("SPECIFIC_WEAPON (2)", "A selected InteractionHand check for a Specific Weapon.")}
                {code("SKILL_EXISTENCE (3)", "A Skill Check for a selected slot (Optional) to check for said skill (Required)")}
                {code("SKILL_ACTIVATION (4)", "A Skill Check for a selected slot (Optional) to check for said skill (Required) if it's activated")}
                {code("DATA_KEY (5)", "A Skill Check for a selected slot (Optional) to check for said skill (Required) and check whether a SkillDataKey<Boolean> is set to true.")}
                {code("COMPOSITE (6)", "A composite provider that has multiple providers within itself that checks each provider iteratively. Will be changed to grab the highest priority of a provider conditional type + 1")}
                {code("CUSTOM (7)", "A custom predicate function, basically uses a predicate to checks if said custom conditions are fulfilled to then provide a style.")}
            </div>    
        </div>
    )
}

export default ExCapDocs;