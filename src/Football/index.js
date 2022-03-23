import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";

export const FootballMatches = ()=>{

    const [matches, setMatches] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); //2
        async function fethFootballMatches(){
                const res = await fetch(`https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=2011&page=${currentPage}`);
                const  data = await res.json();
                setCurrentPage((prev) => prev+1)
                setMatches((prev)=>[...prev,...data.data]);
    }

    useEffect(()=>{
        fethFootballMatches();
    },[])

 
    const handleScroll=(e)=>{
        const top = e.target.documentElement.scrollTop;
        const height = window.innerHeight;
        if(top+height+1 >= e.target.documentElement.scrollHeight){
             fethFootballMatches();
        }    
    }
    
    useEffect(()=>{
        window.addEventListener('scroll',handleScroll)
        return () => {
            window.removeEventListener('scroll',handleScroll)
        }
    })

    return <div>
        <h1>Teams Played:</h1>
        <div>
        <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableCell>
                            Team 1
                        </TableCell>
                        <TableCell>
                            Team 2
                        </TableCell>
                    </TableHead>
                    <TableBody>
                    {matches.map((item,index)=>{
                        return <div key={index}>
                        <TableRow>
                        <TableCell>
                                {index}
                            </TableCell>
                            <TableCell>
                                {item.team1}
                            </TableCell>
                            <TableCell>
                                {item.team2}
                            </TableCell>
                        </TableRow>
                        </div>
                    })}
                    </TableBody>
                </Table>
        </TableContainer>
        </div>
    </div>
}