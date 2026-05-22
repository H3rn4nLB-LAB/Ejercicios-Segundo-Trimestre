 # Ejercicio 1 de Xpath

 ## 1. Nombre del instituto.

 /ies/nombre

 ## 2. Página web del Instituto

/ies/web

 ## 3. Nombre de los Ciclos Formativos

 /ies/ciclos/ciclo/nombre

 ## 4. Siglas por las que se conocen los Ciclos Formativos

 /ies/ciclos/ciclo/@id

 ## 5. Años en los que se publicaron los decretos de título de los Ciclos Formativos:

 /ies/ciclos/ciclo/decretoTitulo/@año

 ## 6. Ciclos Formativos de Grado Medio (se trata de obtener el elemento <ciclo> completo)

 /ies/ciclos/ciclo[grado="Medio"]

 ## 7. Nombre de los Ciclos Formativos de Grado Superior

 /ies/ciclos/ciclo[grado="Superior"]/nombre

 ## 8. Nombre de los Ciclos Formativos anteriores a 2010

 /ies/ciclos/ciclo[decretoTitulo/@año < 10]/nombre

 ## 9. Nombre de los Ciclos Formativos de 2008 o 2010:

  /ies/ciclos/ciclo[decretoTitulo/@año = 2008 or decretoTitulo/@año = 2010]/nombre


 
