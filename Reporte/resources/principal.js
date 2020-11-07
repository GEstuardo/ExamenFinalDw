$(document).ready(function(){
						    // This sets the opacity of the thumbs to fade down to 30% when the page loads

	$("#menu li").hover(
	function(){
		$(this).siblings().stop();
		$(this).siblings().fadeTo('slow',0.2);
	},
	function(){
		$(this).siblings().stop();
		$(this).siblings().fadeTo('slow',1);
	}
	
	);
	
	$("#menu2 li").hover(
	function(){
		$(this).siblings().stop();
		$(this).siblings().fadeTo('slow',0.2);
	},
	function(){
		$(this).siblings().stop();
		$(this).siblings().fadeTo('slow',1);
	}
	
	);
	
	$("#listaTabs li").hover(
	function(){
		$(this).siblings().stop();
		$(this).siblings().fadeTo('slow',0.2);
	},
	function(){
		$(this).siblings().stop();
		$(this).siblings().fadeTo('slow',1);
	}
	
	);
	
	$('#button').click(function(){
	 window.alert("Se ha le enviado su contrase�a a su correo");
	 window.location.href='../index.html';
	});
	
	$('#comID').click(function(){
	window.alert("Se ha compactado la planilla exitosamente")
	});
	
	$('#cosID').click(function(){
	window.alert("Se ha consistenciado la planilla exitosamente")
	});
	
	
	
	$("#AreaComboBox option").click(function() {
			
		if(this.value == '�rea Academica' ) {
			var content= "<span id ='DepLabel' class='componente'>Departamento</span>"+
								"<select id='DepComboBox' class='componente'> <option >Directorio</option> <option >Decanato Acad�mico Administrativo</option> <option >Decanato Internacional y  de Postgrado</option> <option >Directorio de Carrera</option> <option >Servicios Acad�micos</option> <option >Biblioteca</option> <option >Recursos Empresariales</option> <option >Centro de Investigaci�n</option> <option >Profesorado</option> <option >Deportes</option> <option value=>Responsabilidad Social (ASU)</option></select>";
			$('#main').append(content);		 
		}
		else{
			var content2 ="<span id ='DepLabel' class='componente'>Departamento</span>"+ 
			"<select id='DepComboBox' class='componente'> <option>Gerencia</option> <option>Contralor�a </option> <option>Jefatura </option> <option>Admisi�n </option><option>Relaciones Educativas </option><option>Consejo de Vida Integral </option> <option>Coordinaci�n de Costos y Presupuestos</option> <option>Coordinaci�n de Cr�ditos y Cobranzas</option> <option>Abogados</option> </select>";
			$('#main').append(content2);

		}
		$("#DepComboBox option").click(function() {	
		
		var content3= "<span id='tLabel' class='componente'>Trabajador</span> <select id='tComboBox' class='componente'> <option>Tafur Perez, Roger Eduardo</option> <option>Lucano Callenova, Gabriel Giovanni</option> <option>Acu�a Espejo, Cesar Gustavo</option> <option>Pinedo Kohler, Jeffrey Andr�</option> <option>Arenas Albarrac�n, Eduardo Adbeel</option> <option>Novoa Pachas, Lizier</option></select> ";			
		$('#main').append(content3);
		 
		
		});
		});
		
		$("#trabajadores").show();
		$("#trabajadores2").hide();
		$("#deps option").click(function (){
			$("#trabajadores2").show();
			$("#trabajadores").hide();
		}); 
		
		$('#delButton').click(function(){
		var answer = confirm("�Est� seguro de Desincorporar Trabajador?");
		if (answer){
			alert("El Trabajador ha sido desincorporado");
			window.location.href='InicioPersonal.html';
		}
		else{
			window.location.href='InicioPersonal.html';
	}
	 
	});

	$('#applyButtonF').click(function(){
	 window.alert("Se a�adi� correctamente al trabajador.");
	 window.location.href='InicioPersonal.html';
	});
	
	$('#cerrID').click(function(){
	 window.alert("Se ha cerrado el per�odo actual exitosamente.");
	 window.location.href='periodos.html';
	});
	
	$('#calcID').click(function(){
	 window.alert("Se ha calculado las planillas del Per�odo Actual exitosamente.");
	 window.location.href='periodos.html';
	});
	
	$('#ingresarPButton').click(function(){
	 window.alert("Se ingres� el Per�odo exitosamente.");
	 window.location.href='periodos.html';
	});
	
	$('#eliminarPButton').click(function(){
	 window.alert("Se elimin� el Per�odo exitosamente.");
	 window.location.href='periodos.html';
	});
	
	$('#generarAd').click(function(){
	 window.alert("Se gener� el Adelanto exitosamente.");
	 window.location.href='adelantos.html';
	});
	
	$('#gAFPSNP').click(function(){
	 window.alert("Se insert� AFP/SNP exitosamente.");
	 window.location.href='afp-snp-list.html';
	});
	
	$('#gCargos').click(function(){
	 window.alert("Se insert� el Cargo exitosamente.");
	 window.location.href='cargos.html';
	});
		
	$('#eCargos').click(function(){
	 window.alert("Se elimin� el Cargo exitosamente.");
	 window.location.href='cargos.html';
	});	

	$('#gConceptos').click(function(){
	 window.alert("Se insert� el Concepto exitosamente.");
	 window.location.href='conceptos.html';
	});
	
	$('#eConceptos').click(function(){
	 window.alert("Se elimin� el concepto exitosamente.");
	 window.location.href='conceptos.html';
	});
	
	$('#gConstantes').click(function(){
	 window.alert("Se insert� la Constante exitosamente.");
	 window.location.href='constantes.html';
	});
	
	$('#eConstantes').click(function(){
	 window.alert("Se elimin� la Constante exitosamente.");
	 window.location.href='constantes.html';
	});
	
	$('#gValores').click(function(){
	 window.alert("Se agrego el Valor exitosamente.");
	 window.location.href='valores-consultar.html';
	});
	
	
});
	
