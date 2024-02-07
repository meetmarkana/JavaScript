let num = document.getElementById("num").value
	function printOddNumbers()
	{
		for(let i = 1 ; i <= num ; i++)
		{
            if(i % 2 != 0){

                console.log(i)

            }
			
		}
	}
	printOddNumbers()