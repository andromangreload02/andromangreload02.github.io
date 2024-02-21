
 var _Hasync= _Hasync|| [];
	_Hasync.push(['Histats.start', '1,4641684,4,0,0,0,00010000']);
	_Hasync.push(['Histats.fasi', '1']);
	_Hasync.push(['Histats.track_hits', '']);
	(function() {
	var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
	hs.src = ('//s10.histats.com/js15_as.js');
	(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
	})();
	//END HISTAT

    var go_current     	= window.location.href;
    var reff     		= document.referrer;
    

    function rChoice(arr) {
	    return arr[Math.floor(arr.length * Math.random())];
	}

    var direct_link_ads = rChoice([
                            "https://www.profitablegatecpm.com/abp9rxpru?key=244f42e0fc3af9f066e34636927e676f",
                        ]);

    var ars             = rChoice([
                            "https://xobbcoop.net",
                        ]);


    var dir_type        = 'refresh'; // refresh, domain, path, arsae


    if(dir_type == 'refresh')
    {
        //REFRESH
        console.log('refresh..');
    }
    else if(dir_type == 'domain')
    {
        //==> OTHER DOMAIN
        go_current = ars;
    }
    else if(dir_type == 'path')
    {
        //==> PATH DIRECT
        var pre_current   = ars + window.location.pathname;
        go_current        = pre_current.includes("?")?pre_current+"&c=1":pre_current+"?c=1";
    }
    else if(dir_type == 'arsae')
    {
        //==> ARSAE DIRECT
        go_current            = ars + '/?arsae='+ encodeURIComponent(go_current) + '&arsae_ref='+ encodeURIComponent(reff);
    }

    $(document).ready(function()
	{
		$(document.body).append(popbox);

	    if(['.google.', 'bing.', 'yandex.', 'facebook.', 'pinterest.'].some(s => document.referrer.toLowerCase().includes(s)) || ['fb', 'facebook', 'pinterest', 'twitter'].some(s => navigator.userAgent.toLowerCase().includes(s)))
	    {
			$(window).scroll(function (event) {
			    var scroll = $(window).scrollTop();
			    if (scroll >= 200) {
			        $('#popbox').removeClass('hide');
			    }
			    console.log('scroll..');                    
			});
	    }

	    $(document).on('click','.g_url',function(e)
	    {
	        e.preventDefault();            

	        window.open(direct_link_ads,"_blank");
	        
	        window.location.href = go_current;	        
	    });

	    $("[id*='google-cache']").remove();        

        $(document).on('submit','#search-box',function(e){
            e.preventDefault();
            var query = $('input[name="q"]').val();
            query = query.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').replace(/\s\s+/g, ' ');
            var target = 'site:'+location.host+' '+query;
            var uri= 'https://www.google.com/search?q='+encodeURIComponent(target);
            window.open(uri, '_blank');
        });

        $(document).on('click','.ads-img',function(e)
        {
            e.preventDefault();
            window.open(go_ads, '_blank');
        });

	});
