// Code your solution here
function findMatching(driver, string){
return driver.filter(d=>
    d.toLowerCase()===string.toLowerCase()
)
}

function fuzzyMatch(driver, string){
    return driver.filter(d=>
        d.substring(0,2)===string
    )
}

function matchName(driver, string){
    return driver.filter(d=>
        d.name===string
    )
}