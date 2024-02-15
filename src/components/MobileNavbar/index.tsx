import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerOverlay, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import NSwitch from '../NAV_SWITCH/NSwitch'
import { pathNavigation } from '../../portfolio'
import { HamburgerIcon } from "@chakra-ui/icons"

const MobileNavbar: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <>
            <Box onClick={onOpen}>

                <HamburgerIcon />
            </Box>


            <Drawer placement={'top'} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent sx={{
                    paddingX: "30px",
                    paddingTop: "50px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start"
                }}

                >
                    <DrawerBody>
                        {pathNavigation.map((item) => {
                            console.log("item.path", item.path);
                            return (
                                item.active && (
                                    <NSwitch
                                        // isActive={location.pathname === item.path}
                                        isActive={true}
                                        active={item.active}
                                        path={item.path}
                                        key={item.id}
                                        name={item.name}
                                        id={item.id}
                                    />
                                )
                            );
                        })}


                    </DrawerBody>
                    <DrawerFooter sx={{ display: "flex", alignItem: "flex-start" }}>
                        <Button
                            sx={{
                                target: "_blank"
                            }}
                            bg={"thistheme.text"}
                            color={"white"}
                            _hover={{
                                border: "1px ",
                                bg: "thistheme.background",
                                borderColor: "thistheme.text",
                                color: "thistheme.text",
                            }}
                            size={"md"}
                            onClick={() => {
                                window.open("https://drive.google.com/file/d/1Ed3QC1wUNjKQS6HdP0nXgmggDRzHRZso/view?usp=drive_link", "_blank");
                                setTimeout(() => {
                                    window.location.href = "https://drive.google.com/uc?export=download&id=1Ed3QC1wUNjKQS6HdP0nXgmggDRzHRZso";
                                }, 500); 
                            }}
                        >
                       See Resume
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default MobileNavbar