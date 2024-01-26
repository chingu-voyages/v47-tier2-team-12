import { Button, Divider, ListItem, ListItemText, Typography } from '@mui/material'
import React, { useState } from 'react'

function RoutineActivity(props) {
    const [selectedMenu,setSelectedMenu] = useState("")
    const { allData } = props
    console.log("all data", allData)
    return (
        <div style={{marginTop:"3rem"}} className='m-0 mt-5'>
             <div className='col-12 mt-5 p-5 pb-0'>
            <div className="row d-flex align-items-end mb-0 ms-0 mt-1">
               
                <div className="col-md-3 px-0">

                    <Button
                        color="primary"
                        variant={selectedMenu === "Projects" ? "contained" : "outlined"}
                        sx={{
                            borderRadius: "inherit",
                            paddingBottom: selectedMenu === "Projects" ?
                                "15px" : "10px", paddingTop:
                                selectedMenu === "Projects" ? "15px" : "10px"
                        }}
                        onClick={() => setSelectedMenu("Projects")}
                        fullWidth
                        size="large"
                    >
                        Projects
                    </Button>
                </div>
                <div className="col-md-3 px-0">
                    <Button
                        color="primary"
                        variant={selectedMenu === "BlogPosts" ? "contained" : "outlined"}
                        sx={{
                            borderRadius: "inherit",
                            paddingTop: selectedMenu === "BlogPosts" ? "15px" : "10px",
                            paddingBottom: selectedMenu === "BlogPosts" ? "15px" : "10px",
                        }}
                        onClick={() => setSelectedMenu("BlogPosts")}
                        fullWidth
                        size="large"
                    >
                        Blog Posts
                    </Button>
                
                
                </div>
            </div>
            </div>
            <Divider variant='middle' className='my-1' sx={{height:'1px', borderColor:"black"}}></Divider>
            <div className='container-fluid p-5'>
                <div>
                <ListItem>
                <ListItemText 
                    primary={"Monday"}
                    secondary={"update Recipes Project Backlog"}
                />
                </ListItem>
                </div>

                <div>
                <ListItem>
                <ListItemText 
                    primary={"Monday"}
                    secondary={"update The dailyTasks sheet with the backlog tasks"}
                />
                </ListItem>
                </div>
            </div>
        </div>
    )
}

export default RoutineActivity