 // hexaedro menubar

 // definição dos conteudos de cada aba
 var youtubesrcTetraedro="<iframe width='900'        height='500' src='https://www.youtube.com/embed/E3KDVkaOq2o; title='YouTube video player' frameborder=0 allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
 // configurar tela e o responsível # pesqusar como aplicar direto aqui no iframe ??
 
 var geogebrasrcTetraedro="<iframe src='https://www.geogebra.org/m/n2efdya6'; width='900' height='600' allowfullscreen style='border: 1px solid #e4e4e4;border-radius: 4px;' frameborder='0'></iframe>";
 var projetosrcTetraedro="<iframe width='900'        height='500' src='https://docs.google.com/presentation/d/1TKRt4iURgsgGNLhoSdlEs-IDm9UdYgpX0MCT-3GcjX4/edit#slide=id.p'; title='YouTube video player' frameborder=0 allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
 // uma função para marcar como selecionado atraves de uma classe 'select' definida no estilo
 // a função recebe a aba (anchor) para selecionar e deve antes de selecionar, deselecionar as demais abas
 function selectabaTetraedro(an) {
     var ans=an.parentNode.parentNode.getElementsByTagName('a'); // procurando as abas do menu subindo para o avo.... o pai sendo o tag li
     for (var i = 0; i < ans.length; i++) ans[i].className=''; // para cada um elimina a class colocando uma string vazia
     an.className='select'; // seleciona a aba solicita recebi em parametro
 }

// hexaedro menubar
var youtubesrcHexaedro="<iframe width='900'        height='500' src='https://www.youtube.com/embed/E3KDVkaOq2o'; title='YouTube video player' frameborder=0 allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
var geogebrasrcHexaedro="<iframe src='https://www.geogebra.org/m/aaqwuprc'; width='900' height='600' allowfullscreen style='border: 1px solid #e4e4e4;border-radius: 4px;' frameborder='0'></iframe>";
var projetosrcHexaedro="<iframe width='900'        height='500' src='https://docs.google.com/presentation/d/1TKRt4iURgsgGNLhoSdlEs-IDm9UdYgpX0MCT-3GcjX4/edit#slide=id.p'; title='YouTube video player' frameborder=0 allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";

function selectabaHexaedro(an) {  
    var ans=an.parentNode.parentNode.getElementsByTagName('a'); 
    for (var i = 0; i < ans.length; i++) ans[i].className='';
    an.className='select'; 
}

// octaedro menubar
var youtubesrcOctaedro="<iframe width='900'        height='500' src='https://www.youtube.com/embed/E3KDVkaOq2o'; title='YouTube video player' frameborder=0 allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
var geogebrasrcOctaedro="<iframe src='https://www.geogebra.org/m/udmrebmf'; width='900' height='600' allowfullscreen style='border: 1px solid #e4e4e4;border-radius: 4px;' frameborder='0'></iframe>";
var projetosrcOctaedro="<iframe width='900'        height='500' src='https://www.geogebra.org/m/aaqwuprc'; title='YouTube video player' frameborder=0 allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";

function selectabaOctaedro(an) {  
    var ans=an.parentNode.parentNode.getElementsByTagName('a'); 
    for (var i = 0; i < ans.length; i++) ans[i].className='';
    an.className='select'; 
}

 // dodaedro menubar
 var youtubesrcDodecaedro="<iframe width='900'        height='500' src='https://www.youtube.com/embed/E3KDVkaOq2o'; title='YouTube video player' frameborder=0 allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
 var geogebrasrcDodecaedro="<iframe src='https://www.geogebra.org/m/jnryfpzr'; width='900' height='600' allowfullscreen style='border: 1px solid #e4e4e4;border-radius: 4px;' frameborder='0'></iframe>";
 var projetosrcDodecaedro="<iframe width='900'        height='500' src='https://docs.google.com/presentation/d/1TKRt4iURgsgGNLhoSdlEs-IDm9UdYgpX0MCT-3GcjX4/edit#slide=id.p'; title='YouTube video player' frameborder=0 allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
 
 function selectabaDodecaedro(an) {  
     var ans=an.parentNode.parentNode.getElementsByTagName('a'); 
     for (var i = 0; i < ans.length; i++) ans[i].className='';
     an.className='select'; 
 }

 // icosaedro menubar
 var youtubesrcIcosaedro="<iframe width='900'        height='500' src='https://www.youtube.com/embed/E3KDVkaOq2o'; title='YouTube video player' frameborder=0 allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
 var geogebrasrcIcosaedro="<iframe src='https://www.geogebra.org/m/v6j2yvc6'; width='900' height='600' allowfullscreen style='border: 1px solid #e4e4e4;border-radius: 4px;' frameborder='0'></iframe>";
 var projetosrcIcosaedro="<iframe width='900'        height='500' src='https://docs.google.com/presentation/d/1TKRt4iURgsgGNLhoSdlEs-IDm9UdYgpX0MCT-3GcjX4/edit#slide=id.p'; title='YouTube video player' frameborder=0 allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
 
 function selectabaIcosaedro(an) {  
     var ans=an.parentNode.parentNode.getElementsByTagName('a'); 
     for (var i = 0; i < ans.length; i++) ans[i].className='';
     an.className='select'; 
 }

  // Início menubar
  var youtubesrcSolidosplatao="<iframe width='900'        height='500' src='https://www.youtube.com/embed/E3KDVkaOq2o; title='YouTube video player' frameborder=0 allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
  var geogebrasrcSolidosplatao="<iframe src='https://www.geogebra.org/m/HUHaGF3q'; width='900' height='600' allowfullscreen style='border: 1px solid #e4e4e4;border-radius: 4px;' frameborder='0'></iframe>";
  var projetosrcSolidosplatao="<iframe width='900'        height='500' src='https://docs.google.com/presentation/d/1TKRt4iURgsgGNLhoSdlEs-IDm9UdYgpX0MCT-3GcjX4/edit#slide=id.p'; title='YouTube video player' frameborder=0 allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
  
  function selectabaSolidosplatao(an) {  
      var ans=an.parentNode.parentNode.getElementsByTagName('a'); 
      for (var i = 0; i < ans.length; i++) ans[i].className='';
      an.className='select'; 
  }