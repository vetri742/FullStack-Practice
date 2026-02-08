class PasswordChecker{
    constructor(password)
    {
        this.password=password
    }
    hasUpper(){
        return /[A-Z]/.test(this.password)
    }
    hasLower()
    {
        return /[a-z]/.test(this.password)
    }
    hasNumber()
    {
        return /[0-9]/.test(this.password)
    }
    hasSpecialCharacter()
    {
        return /[^a-zA-Z0-9]/.test(this.password)
    }

Score()
{
    let score=0;
    if(this.password.length>=8) score++;
    if(this.hasUpper()) score++;
    if(this.hasLower()) score++;
    if(this.hasNumber()) score++;
    if(this.hasSpecialCharacter()) score++;
    
    return score;
}
strength()
{
    const s= this.Score();
    if(s<=2) return "Weak";
    if(s==3 || s==4) return "Medium";
    return "Strong";
}
}
const mypwd= new PasswordChecker("Virat@18")
console.log("Your_pw_Score:",mypwd.Score())
console.log(mypwd.strength())
