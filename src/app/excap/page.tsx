import { NextPage } from "next";
import NavBar from "@/components/navbar";
import excapModule from "./excap.module.css"
import eng from "@/data/localization";
import Code from "@/components/code";


const ExCapDocs:NextPage = () =>
{
    return (
        <div>
            <header>
                <NavBar/>
            </header>
            <div className="p-16 text-6xl flex items-center justify-center w-full select-none">
                <h1 className={excapModule.title}>
                    {eng.Title}
                </h1>
            </div>
            <div className="m-8 p-4 bg-slate-700 rounded-xl">
            <p className="text-xl indent-8">{eng.Text.TutorialConditional}</p>
                <h3 className="text-4xl flex m-4 justify-center">{eng.Headings.ConditionalMethods}</h3>
                <Code methodName="setWieldStyle(Style)">
                    This method sets the final Wield Style that the provider conditional will give when its conditions are all satisfied.
                </Code>
                <Code methodName="isVisibleOffHand(boolean)">
                    This method looks at whether a weapon is visible in the Off Hand Slot when you are wielding said weapon.
                </Code>
                <Code methodName="setType(ProviderConditionalType)">
                    Sets what type will the Provider Conditional be, defaults to DEFAULT.
                </Code>
                <h4 className="text-3xl flex m-4 justify-center">{eng.Headings.SkillMethods}</h4>
                <Code methodName="setSkillToCheck(Skill)">
                    This method sets the skill that a Skill Provider would check for.
                </Code>
                <Code methodName="setKey(SkillDataKey<Boolean>)">
                    This checks for what Skill Data Key (Namely a Boolean Key) to check for, only Boolean Keys are accepted.
                </Code>
                <Code methodName="setSlot(SkillSlot)">
                    This sets the Provider Conditional what specific skill slot to check the skill for.
                </Code>
                <h4 className="text-3xl flex m-4 justify-center">{eng.Headings.WeaponMethods}</h4>
                <Code methodName="setWeapon(Item)">
                    Sets the specific weapon to check for, like what Item it is.
                </Code>
                <Code methodName="setCategory(WeaponCategory)">
                    Sets what weapon category the provider should check the weapon.
                </Code>
                <Code methodName="setHand(InteractionHand)">
                    Sets which hand to check for doing weapon checks. At this point, you must specify what hand in your weapon-based Providers. In v7.4 this will be defaulted to InteractionHand.OFF_HAND
                </Code>
                <h4 className="text-3xl flex m-4 justify-center">Misc Methods for Required Types</h4>
                <Code methodName="setProviderConditionals(ProviderConditional...)">
                    Specify what provider conditionals will be added to this Composite provider conditional. They don&apost need to have a style or visible off hand set since they only return a true/false value.
                </Code>
                <Code methodName="setCustomFunction(Function<LivingEntityPatch<?>, Boolean)">
                    Sets what custom function will be run when the provider is set to Custom. In v7.4 this will be replaced with a Predicate{"<LivingEntityPatch<?>."}
                </Code>
                <h4 className="text-3xl flex m-4 justify-center">Provider Conditional Types</h4>
                <p className="text-lg indent-8">ProviderConditionalType is an Enumerator, which means that the types are rather fixed and it determines what the Provider Conditional will do when the provider conditional is fired. The number beside the type determines priority, provider conditionals are sorted by priority, so higher priority conditionals will go first.</p>
                <Code methodName="DEFAULT (0)">
                    The default type, often placed last.
                </Code>
                <Code methodName="WEAPON_CATEGORY (1)">
                    A selected InteractionHand check for Weapon Category.
                </Code>
                <Code methodName="SPECIFIC_WEAPON (2)">
                    A selected InteractionHand check for a Specific Weapon.
                </Code>
                <Code methodName="SKILL_EXISTENCE (3)">
                    A Skill Check for a selected slot (Optional) to check for said skill (Required).
                </Code>
                <Code methodName="SKILL_ACTIVATION (4)">
                    A Skill Check for a selected slot (Optional) to check for said skill (Required) if it&aposs activated.
                </Code>
                <Code methodName="DATA_KEY (5)">
                    A Skill Check for a selected slot (Optional) to check for said skill (Required) and check whether a {"SkillDataKey<Boolean>"} is set to true.
                </Code>
                <Code methodName="COMPOSITE (6)">
                    A composite provider that has multiple providers within itself that checks each provider iteratively. Will be changed to grab the highest priority of a provider conditional type + 1.
                </Code>
                <Code methodName="CUSTOM (7)">
                    A custom predicate function, basically uses a predicate to check if said custom conditions are fulfilled to then provide a style.
                </Code>
            </div>    
        </div>
    )
}

export default ExCapDocs;