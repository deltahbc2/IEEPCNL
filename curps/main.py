import curp
import datetime

fecha = datetime.datetime.now()
yearnow = fecha.year
micurp = str(input("Ingrese su CURP: "))
try:

    c = curp.CURP(micurp)

    nacimiento = c.fecha_nacimiento
    #desglose
    year = nacimiento.year
    month = nacimiento.month
    day = nacimiento.day
    edad = int(yearnow) - int(year)

    if edad >= 18:
        print("El usuario es mayor de edad")
    else:
        print("El usuario es menor de edad")

except Exception as e:
    print(e)

    

