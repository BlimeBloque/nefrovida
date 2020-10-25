export function obtenerDiagnosticoIMC(imc, sexo, edad)
{
    if(imc == null)
        return null;

    switch(edad)
    {
        case 10:
            if(sexo === 'H')
            {
                if(imc <= 13.7)
                {
                    return "BAJO PESO";
                }
                else if(imc > 13.7 && imc < 18.5)
                {
                    return "NORMAL";
                }
                else if(imc >= 18.5 && imc < 21.4)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
            else
            {
                if(imc <= 13.5)
                {
                    return "BAJO PESO";
                }
                else if(imc > 13.5 && imc < 19.0)
                {
                    return "NORMAL";
                }
                else if(imc >= 19.0 && imc < 22.6)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
        break;
        case 11:
            if(sexo === 'H')
            {
                if(imc <= 14.1)
                {
                    return "BAJO PESO";
                }
                else if(imc > 14.1 && imc < 19.2)
                {
                    return "NORMAL";
                }
                else if(imc >= 19.2 && imc < 22.5)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
            else
            {
                if(imc <= 13.9)
                {
                    return "BAJO PESO";
                }
                else if(imc > 13.9 && imc < 19.9)
                {
                    return "NORMAL";
                }
                else if(imc >= 19.9 && imc < 23.7)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
        break;
        case 12:
            if(sexo === 'H')
            {
                if(imc <= 14.5)
                {
                    return "BAJO PESO";
                }
                else if(imc > 14.5 && imc < 19.9)
                {
                    return "NORMAL";
                }
                else if(imc >= 19.9 && imc < 23.6)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
            else
            {
                if(imc <= 14.4)
                {
                    return "BAJO PESO";
                }
                else if(imc > 14.4 && imc < 20.8)
                {
                    return "NORMAL";
                }
                else if(imc >= 20.8 && imc < 25.0)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
        break;
        case 13:
            if(sexo === 'H')
            {
                if(imc <= 14.9)
                {
                    return "BAJO PESO";
                }
                else if(imc > 14.9 && imc < 20.8)
                {
                    return "NORMAL";
                }
                else if(imc >= 20.8 && imc < 24.8)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
            else
            {
                if(imc <= 14.9)
                {
                    return "BAJO PESO";
                }
                else if(imc > 14.9 && imc < 21.8)
                {
                    return "NORMAL";
                }
                else if(imc >= 21.8 && imc < 26.2)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
        break;
        case 14:
            if(sexo === 'H')
            {
                if(imc <= 15.5)
                {
                    return "BAJO PESO";
                }
                else if(imc > 15.5 && imc < 21.8)
                {
                    return "NORMAL";
                }
                else if(imc >= 21.8 && imc < 25.9)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
            else
            {
                if(imc <= 15.4)
                {
                    return "BAJO PESO";
                }
                else if(imc > 15.4 && imc < 22.7)
                {
                    return "NORMAL";
                }
                else if(imc >= 22.7 && imc < 27.3)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
        break;

        case 15:
            if(sexo === 'H')
            {
                if(imc <= 16.0)
                {
                    return "BAJO PESO";
                }
                else if(imc > 16.0 && imc < 22.7)
                {
                    return "NORMAL";
                }
                else if(imc >= 22.7 && imc < 27.0)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
            else
            {
                if(imc <= 15.9)
                {
                    return "BAJO PESO";
                }
                else if(imc > 15.9 && imc < 23.5)
                {
                    return "NORMAL";
                }
                else if(imc >= 23.5 && imc < 28.2)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
        break;

        case 16:
            if(sexo === 'H')
            {
                if(imc <= 16.5)
                {
                    return "BAJO PESO";
                }
                else if(imc > 16.5 && imc < 23.5)
                {
                    return "NORMAL";
                }
                else if(imc >= 23.5 && imc < 27.9)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
            else
            {
                if(imc <= 16.2)
                {
                    return "BAJO PESO";
                }
                else if(imc > 16.2 && imc < 24.1)
                {
                    return "NORMAL";
                }
                else if(imc >= 24.1 && imc < 28.9)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
        break;
        case 17:
            if(sexo === 'H')
            {
                if(imc <= 16.9)
                {
                    return "BAJO PESO";
                }
                else if(imc > 16.9 && imc < 24.3)
                {
                    return "NORMAL";
                }
                else if(imc >= 24.3 && imc < 28.6)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
            else
            {
                if(imc <= 16.4)
                {
                    return "BAJO PESO";
                }
                else if(imc > 16.4 && imc < 24.5)
                {
                    return "NORMAL";
                }
                else if(imc >= 24.5 && imc < 29.3)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
        break;
        case 18:
            if(sexo === 'H')
            {
                if(imc <= 17.3)
                {
                    return "BAJO PESO";
                }
                else if(imc > 17.3 && imc < 24.9)
                {
                    return "NORMAL";
                }
                else if(imc >= 24.9 && imc < 29.2)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
            else
            {
                if(imc <= 16.4)
                {
                    return "BAJO PESO";
                }
                else if(imc > 16.4 && imc < 24.8)
                {
                    return "NORMAL";
                }
                else if(imc >= 24.8 && imc < 29.5)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
        break;
        case 19:
            if(sexo === 'H')
            {
                if(imc <= 17.6)
                {
                    return "BAJO PESO";
                }
                else if(imc > 17.6 && imc < 25.4)
                {
                    return "NORMAL";
                }
                else if(imc >= 25.4 && imc < 29.7)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
            else
            {
                if(imc <= 16.5)
                {
                    return "BAJO PESO";
                }
                else if(imc > 16.5 && imc < 25.0)
                {
                    return "NORMAL";
                }
                else if(imc >= 25.0 && imc < 29.7)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
        break;
    }
}

export function obtenerIMC(altura, peso)
{
    if(altura == null || peso == null)
        return null;

    altura /= 100;
    return (peso/(altura*altura)).toFixed(1);
}

export function getAge (dateString)
{
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
}