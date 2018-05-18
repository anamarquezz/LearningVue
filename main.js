var app = new Vue({
        el: "#app",
        data:{
        	product:'Socks',
        	image:'backgroundcolorfull.jpg',
        	anchortag:'https://www.google.com',
        	inStock:true,
        	onSale:false,
        	detail:["80% cotton","20% polyester","Gender-neutral"],
        	variants:[
        	{
        		variantId:2234,
        		variantColor: "pink"
        	},
        	{
        		variantId:2235,
        		variantColor: "black"
        	}
        	],
        	ArraySizes [
        	        	comentarios:
        	        	       	{
        	        	       		comentarioId:1,
        	        	       		comentario: 'Bueno'
        	        	       	},
        	        	comentarios:
        	        	        {
        	        	           	comentarioId:2,
        	        	           	comentario: 'Malo'
        	        	        },
        	        	comentarios:
        	        	       	{
        	        	       	    comentarioId:3,
        	        	       	    comentario: 'Okay'
        	        	       	},
        	        	 comentarios:  
        	        	 		{
        	        	 		    comentarioId:4,
        	        	 		    comentario: 'Mala calidad'
        	        	 		},
        	        	]
        	}
  });