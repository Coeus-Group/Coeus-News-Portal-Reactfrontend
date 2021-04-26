import React from "react";
import { Accordion, AccordionSection } from "../Accordion/Accordion";
import { StyledSideMenu } from "./style";

const sideCategories = [
    {
        id: 1,
        name: "Category",
        subcategories: [
            {
                id: 1,
                name: "Business",
                url: " "
            },
            {
                id: 2,
                name: "Science",
                url: " "
            },
            {
                id: 3,
                name: "Technology",
                url: " "
            },
            {
                id: 5,
                name: "Sports",
                url: " "
            },
            {
                id: 6,
                name: "Health",
                url: " "
            },
            {
                id: 7,
                name: "Entertainment",
                url: " "
            }
        ]
    },
    {
        id: 2,
        name: "Location",
        subcategories: [
            {
                id: 1,
                name: "London",
                url: " "
            },
            {
                id: 2,
                name: "Manchester",
                url: " "
            },
            {
                id: 3,
                name: "Birmingham",
                url: " "
            },
            {
                id: 4,
                name: "Manchester",
                url: " "
            },
            {
                id: 5,
                name: "Cambridge",
                url: " "
            },
            {
                id: 6,
                name: "Oxford",
                url: " "
            }
        ]
    }
];

const SideMenu = (props) => {
    return (
        <StyledSideMenu open={props.open} onClick={props.onClick}>
            <AccordionSection>
                {sideCategories.map((sideCategory) => (
                    <Accordion
                        accordionTitle={sideCategory.name}
                        subcategories={sideCategory.subcategories}
                    />
                ))}
            </AccordionSection>
        </StyledSideMenu>
    );
};

export default SideMenu;
