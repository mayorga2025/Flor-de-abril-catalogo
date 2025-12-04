// Flor de Abril - lógica de interfaz y datos
(function(){
  const costumes = [
    { id:1, name:"Traje Típico Mestizaje", description:"Vestido tradicional con bordados florales coloridos, ideal para presentaciones folclóricas.", image:"assets/mestizaje.png", price:"C$ 500", sizes:["S","M","L","XL"], category:"Mujer , Hombre", region:"Pacífico", colors:[{name:"Rojo y Blanco",gradient: "linear-gradient(90deg, #ffffff 0%, #DC2626 100%)"}], genders:["Hombre","Mujer"], genderImages:{Hombre:"assets/hombremestizaje.png", Mujer:"assets/mujermestizaje.png"}, sizeByGender:{Hombre:["M","L","XL"], Mujer:["S","M","L","XL"]}},
    { id:2, name:"Traje de Güegüense", description:"Vestuario tradicional del famoso baile del Güegüense, patrimonio cultural.", image:"assets/gueeguense.png", price:"C$ 700", sizes:["M","L","XL"], category:"Hombre", region:"Pacífico", colors:[{name:"Multicolor",hex:"#EA580C"}]},
    { id:3, name:"Vestido de Indita", description:"Hermoso vestido de colores vibrantes con encajes y cintas.", image:"assets/inditas.png", price:"C$ 550", sizes:["XS","S","M","L"], category:"Mujer , Hombre", region:"Central", colors:[{name:"Blanco y Rojo", gradient: "linear-gradient(90deg, #ffffff 10%, #ff0000 100%)"},{name:"azul`y Blanco",gradient: "linear-gradient(90deg, #3b82f6 10%, #ffffff 90%)"}], genders:["Hombre","Mujer"], genderImages:{Hombre:"assets/hombreindita.png", Mujer:"assets/mujerindita.png"}, sizeByGender:{Hombre:["S","M","L"], Mujer:["XS","S","M","L"]},colorImages:{"Blanco y Rojo":"assets/inditas.png","Hombre:Blanco y Rojo":"assets/hombreindita.png","Mujer:Blanco y Rojo":"assets/mujerindita.png","azul`y Blanco":"assets/inditazul.png","Hombre:azul`y Blanco":"assets/inditaazulhombre.png","Mujer:azul`y Blanco":"assets/inditazul.png"}},
    { id:4, name:"Traje de Palo de Mayo", description:"Conjunto festivo de la costa caribeña nicaragüense.", image:"assets/palodemayo.png", price:"C$ 600", sizes:["S","M","L"], category:"Mujer, Hombre", region:"Atlántico Norte", colors:[{name:"Rosado Fuccia",hex:"#f50bd2ff"}], genders:["Hombre","Mujer"], genderImages:{Hombre:"assets/hombremayo.png", Mujer:"assets/mujermayo.png"}, sizeByGender:{Hombre:["M","L"], Mujer:["S","M","L"]}},
    { id:6, name:"Traje Típico Infantil", description:"Versión infantil perfecta para actos escolares.", image:"assets/infantil.png", price:"C$ 350", sizes:["4","6","8","10","12"], category:"Niños,Niñas", region:"Pacífico", colors:[{name:"azul y Blanco",gradient:"linear-gradient(90deg, #3b82f6 10%, #ffffff 90%)"},{name:"Rojo",hex:"#DC2626"}], genders:["Niños","Niñas"], genderImages:{"Niños":"assets/niños.png", "Niñas":"assets/niñas.png"}, sizeByGender:{"Niños":["4","6","8"], "Niñas":["4","6","8","10","12"]}, colorImages:{"Rojo":"assets/infantilrojo.png","Niños:Rojo":"assets/niñosrojo.png", "Niñas:Rojo":"assets/niñasrojo.png","azul y Blanco":"assets/infantil.png","Niños:azul y Blanco":"assets/niños.png", "Niñas:azul y Blanco":"assets/niñas.png"}},
    { id:17, name:"El baile de negras", description:"Es una danza interpretada por parejas en la cual ambos son varones y es muy comun verlas parfa las festividades de san jeronimo .", image:"assets/negras.png", price:"C$ 400", sizes:["S","M","L"], category:"Hombre", region:"Central", colors:[{name:"Multicolor",hex:"blue"}]},
    { id:20, name:"polka nicaragüense", description:"Es una danza la cual se realiza de manera rapida, giros, zapteados donde predmina la alegria entre los danzantes.", image:"assets/polka.png", price:"C$ 400", sizes:["S","M","L"], category:"Mujer,Hombre", region:"Central", colors:[{name:"blanco y azul",gradient:"linear-gradient(90deg, #3b82f6 10%, #ffffff 90%)"},{name:"blanco y rojo",gradient:"linear-gradient(90deg, #ffffff 10%, #ff0000 90%)"}],genderImages:{Hombre:"assets/polkahombre.png", Mujer:"assets/polkamujer.png"}, sizeByGender:{Hombre:["S","M","L"], Mujer:["S","M","L"]},genders:["Hombre","Mujer"], colorImages:{"blanco y azul":"assets/polka.png","Hombre:blanco y azul":"assets/polkahombre.png","Mujer:blanco y azul":"assets/polkamujer.png","blanco y rojo":"assets/polkacolor.png","Hombre:blanco y rojo":"assets/polkarojohombre.png","Mujer:blanco y rojo":"assets/polkarojamujer.png"}},
    
   // { id:23, name:"Danza Jamaqueo", description:"Baile tradicional nicaragüense que se caracteriza por el balanceo constateb entre los danzantes , generlmente se baila en parejas", image:"assets/huipiles/huipil_017.png", price:"C$ 400", sizes:["S","M","L"], category:"Mujer", region:"Central", colors:[{name:"Multicolor",hex:"#DC2626"}]},
   // { id:27, name:"Polka y mazurka", description:"Danza originaria de jinotega y es muy popular en las fiestas patronales", image:"assets/huipiles/huipil_021.png", price:"C$ 400", sizes:["S","M","L"], category:"Mujer", region:"Central", colors:[{name:"Multicolor",hex:"#DC2626"}]},
   // { id:29, name:"palo de mayo(May pole)", description:"la mas popular en la región del carbe especificamente en en bluefields.", image:"assets/huipiles/huipil_023.png", price:"C$ 400", sizes:["S","M","L"], category:"Mujer", region:"Central", colors:[{name:"Multicolor",hex:"#DC2626"}]},
   // { id:31, name:"Danzas garifunas", description:"De fuerte carga espiritual y ancestral, festividad interpretada con mascaras.", image:"assets/huipiles/huipil_025.png", price:"C$ 400", sizes:["S","M","L"], category:"Mujer", region:"Central", colors:[{name:"Multicolor",hex:"#DC2626"}]},
   // { id:32, name:"Tululu", description:"Tradicional en corn island , se baila especificamente por las noches, en circulo con la participación de la comundad.", image:"assets/huipiles/huipil_026.png", price:"C$ 400", sizes:["S","M","L"], category:"Mujer", region:"Central", colors:[{name:"Multicolor",hex:"#DC2626"}]},
  ];
  const regions = ["Todas","Pacífico","Central","Atlántico Norte","Atlántico Sur"];

  const trajes = [
    {id:1,name:"Traje Típico Mestizaje",image:costumes[0].image,region:"Pacífico",historia:"El traje del mestizaje nicaragüense refleja la fusión de culturas indígenas y españolas, presentando trajes ostentosos para la mujer con faldas de colores vivos y lentejuelas, y para el hombre con camisas blancas, pantalones de dril y sombreros decorados. Su historia está ligada a la celebración del mestizaje en el Pacífico de Nicaragua, fusionando danzas que evocan el cortejo y las celebraciones populares, con música tradicional como el son de marimba. ",baile:"El Mestizaje",caracteristicas:["Faldas amplias","Bordados coloridos"]},
    {id:2,name:"Traje del Güegüense",image:costumes[1].image,region:"Pacífico",historia:"Obra teatral folclórica declarada Patrimonio.",baile:"La Danza del Güegüense",caracteristicas:["Colores brillantes","Máscara de madera"]},
    {id:3,name:"Vestido de Indita",image:costumes[2].image,region:"Central",historia:"Representa a la mujer campesina de la región central.",baile:"La Indita",caracteristicas:["Blusa y falda","Encajes blancos"]},
    {id:4,name:"Traje de Palo de Mayo",image:costumes[3].image,region:"Atlántico Norte",historia:"Festividad afrocaribeña con colores vivos.",baile:"Palo de Mayo",caracteristicas:["Vestidos cortos","Telas ligeras"]},
    {id:5,name:"Baile de las Negras",image:costumes.find(c=>c.id===17)?.image||"assets/Trajes/negras.png",region:"Central",historia:"Danza interpretada por parejas de varones, típica en festividades de San Jerónimo en Masaya.",baile:"El Baile de las Negras",caracteristicas:["Parejas masculinas","Máscaras y trajes vistosos"]}
  ];

  const $ = s => document.querySelector(s);
  const $$ = s => Array.from(document.querySelectorAll(s));

  // Navegación suave
  document.querySelectorAll('[data-scroll]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const id = btn.getAttribute('data-scroll');
      const el = document.getElementById(id);
      el && el.scrollIntoView({behavior:'smooth'});
      $('#mobileNav')?.classList.add('hidden');
    });
  });

  // Menú móvil
  $('#menuToggle')?.addEventListener('click',()=>{
    $('#mobileNav')?.classList.toggle('hidden');
  });

  // Filtros región
  let selectedRegion = 'Todas';
  function renderRegions(){
    const container = $('#regionButtons'); if(!container) return;
    container.innerHTML='';
    regions.forEach(r=>{
      const b=document.createElement('button');
      b.className='btn outline';
      b.textContent=r;
      if(r===selectedRegion){b.classList.add('primary-active');}
      b.addEventListener('click',()=>{selectedRegion=r; renderRegions(); renderCostumes();});
      container.appendChild(b);
    });
  }

  // Catálogo
  function renderCostumes(){
    const grid = $('#costumeGrid'); if(!grid) return;
    const filtered = selectedRegion==='Todas'?costumes:costumes.filter(c=>c.region===selectedRegion);
    grid.innerHTML = filtered.map(c=>`
      <article class="costume-card fade-in" aria-label="${c.name}">
        <div class="card-media"><img src="${encodeURI(c.image)}" alt="${c.name}"></div>
        <div class="card-body">
          <div class="badges"><span class="badge">${c.category}</span><span style="margin-left:auto;font-size:12px;color:#2563eb">${c.region}</span></div>
          <h3>${c.name}</h3>
          <p style="flex:1;font-size:14px;color:#374151">${c.description}</p>
          <div style="display:flex;align-items:center;justify-content:space-between;margin-top:4px">
            <div><div style="font-size:12px;color:#6b7280">Precio por día</div><div class="price">${c.price}</div></div>
            <button class="btn primary" data-open="${c.id}">Ver Detalles</button>
          </div>
        </div>
      </article>`).join('');
    $$('button[data-open]').forEach(b=> b.addEventListener('click',()=> openModal(parseInt(b.getAttribute('data-open')))) );
  }

  // Modal
  const modal = $('#modal');
  const modalBody = $('#modalBody');
  $('#modalClose')?.addEventListener('click',closeModal);
  modal?.addEventListener('click',e=>{ if(e.target===modal) closeModal(); });

  function openModal(id){
    const c = costumes.find(x=>x.id===id); if(!c) return;
    modalBody.innerHTML = getModalHTML(c);
    modal.classList.remove('hidden');
    setupModalEvents(c);
    modal.setAttribute('aria-hidden','false');
  }
  function closeModal(){ modal.classList.add('hidden'); modal.setAttribute('aria-hidden','true'); }

  function getModalHTML(c){
    const hasGender = Array.isArray(c.genders) && c.genders.length > 0;
    const initialImage = c.image || '';
    return `<h2 style="margin-bottom:12px">${c.name}</h2>
      <p style="margin-bottom:16px">${c.description}</p>
      <div style="display:flex;flex-wrap:wrap;gap:24px">
        <div style="flex:1;min-width:280px">
          <div id="mainImageWrap" class="main-image-wrap"><img id="mainImage" src="${encodeURI(initialImage)}" alt="${c.name}" style="width:100%;border-radius:22px;transition:opacity .35s ease,transform .5s ease" /></div>
          ${hasGender ? `<div id="genderOptions" class="gender-group" aria-label="Seleccionar género"></div>` : ''}
        </div>
        <div style="flex:1;min-width:260px">
          <p><strong>Región:</strong> ${c.region}</p>
          <p><strong>Precio:</strong> ${c.price}</p>
          <div style="margin-top:14px"><strong>Colores:</strong><div id="colorOptions" style="display:flex;gap:10px;margin-top:6px"></div></div>
          <div style="margin-top:14px"><strong>Tallas:</strong><div id="sizeOptions" style="display:flex;gap:10px;flex-wrap:wrap;margin-top:6px"></div></div>
          <div style="margin-top:14px"><strong>Cantidad:</strong><div style="display:flex;align-items:center;gap:10px;margin-top:6px"><button id="decQty" class="btn outline">-</button><div id="qty" style="min-width:40px;text-align:center">1</div><button id="incQty" class="btn outline">+</button></div></div>
          <div style="margin-top:14px"><label style="font-size:14px">Periodo de Alquiler</label>
            <div style="display:flex;gap:8px;margin-top:6px;flex-wrap:wrap">
              <input id="startDate" type="date" style="flex:1;min-width:140px;padding:10px;border:1px solid #d1d5db;border-radius:10px" />
              <input id="endDate" type="date" style="flex:1;min-width:140px;padding:10px;border:1px solid #d1d5db;border-radius:10px" />
            </div>
            <small id="daysInfo" style="display:block;margin-top:6px;font-size:12px;color:#374151"></small>
          </div>
          <div style="margin-top:16px">
            <div style="display:flex;gap:8px;margin-bottom:8px">
              <button id="addCombination" class="btn primary" title="Agregar esta selección a la lista">Agregar combinación</button>
              <button id="clearCombinations" class="btn ghost" title="Vaciar lista de combinaciones">Limpiar lista</button>
            </div>
            <div id="comboList" style="border:1px solid #e5e7eb;border-radius:12px;padding:10px;max-height:180px;overflow:auto"></div>
          </div>
          <div style="display:flex;gap:10px;margin-top:20px">
            <button id="addToCartBtn" class="btn primary" style="flex:1">Agregar todo al carrito</button>
            <button id="reserveBtn" class="btn outline" style="flex:1">Reservar directo</button>
          </div>
        </div>
      </div>`;
  }

  function setupModalEvents(c){
    const colorWrap = $('#colorOptions');
    const sizeWrap = $('#sizeOptions');
    let qty = 1;
    const combinations = [];
    if(colorWrap) colorWrap.innerHTML = c.colors.map(col=>{
      const bg = col.hex || col.gradient || '#e5e7eb';
      return `<button class="color-dot" title="${col.name}" style="background:${bg}"></button>`;
    }).join('');
    function renderSizes(list){
      if(!sizeWrap) return;
      sizeWrap.innerHTML = (list||[]).map(s=>`<button class="size-btn">${s}</button>`).join('');
      $$('.size-btn').forEach(b=> b.addEventListener('click',()=>{ $$('.size-btn').forEach(x=>x.classList.remove('active')); b.classList.add('active'); }));
    }
    renderSizes(c.sizes||[]);
    $$('.color-dot').forEach(d=> d.addEventListener('click',()=>{
      $$('.color-dot').forEach(x=>x.classList.remove('active'));
      d.classList.add('active');
      // si hay imagen por color, actualizar la principal
      const colorName = d.getAttribute('title');
      const imgEl = document.getElementById('mainImage');
      const activeGen = $$('.gender-btn').find(b=>b.classList.contains('active'))?.getAttribute('data-gen')||'';
      let newSrc = null;
      // soporta claves simples por color y combinadas "Genero:Color"
      if(c.colorImages){
        newSrc = c.colorImages[colorName] || (activeGen ? c.colorImages[`${activeGen}:${colorName}`] : null);
      }
      if(newSrc && imgEl){
        imgEl.style.opacity = 0;
        setTimeout(()=>{
          imgEl.src = encodeURI(newSrc);
          imgEl.style.transform = 'scale(1.03)';
          imgEl.style.opacity = 1;
          setTimeout(()=>{ imgEl.style.transform = 'scale(1)'; }, 380);
        }, 160);
      }
    }));
    // Género (si aplica)
    if(Array.isArray(c.genders) && c.genders.length>1){
      const gWrap = document.getElementById('genderOptions');
      if(gWrap){
        // Crear botones de género pero NO activar ninguno por defecto.
        gWrap.innerHTML = c.genders.map(g=>`<button class="gender-btn" data-gen="${g}" aria-pressed="false">${g}</button>`).join('');
        const imgEl = document.getElementById('mainImage');
        $$('.gender-btn').forEach(btn=>{
          btn.addEventListener('click',()=>{
            $$('.gender-btn').forEach(x=>{ x.classList.remove('active'); x.setAttribute('aria-pressed','false'); });
            btn.classList.add('active'); btn.setAttribute('aria-pressed','true');
            const gen = btn.getAttribute('data-gen');
            // Determinar color activo para usar imagen específica si existe
            let activeColorBtn = $$('.color-dot').find(b=>b.classList.contains('active'));
            // Si no hay color seleccionado, activar el primero para coherencia visual
            if(!activeColorBtn && document.getElementById('colorOptions')){
              activeColorBtn = document.querySelector('#colorOptions .color-dot');
              if(activeColorBtn){
                $$('.color-dot').forEach(x=>x.classList.remove('active'));
                activeColorBtn.classList.add('active');
              }
            }
            const activeColor = activeColorBtn?.getAttribute('title')||'';
            let newSrc = null;
            if(c.colorImages){
              newSrc = (activeColor ? c.colorImages[`${gen}:${activeColor}`] : null) || (activeColor ? c.colorImages[activeColor] : null);
            }
            // fallback al mapa por género o a la portada
            if(!newSrc){ newSrc = c.genderImages?.[gen] || c.image; }
            if(imgEl){
              // transición suave: ocultar -> cambiar src -> efecto de escala -> volver
              imgEl.style.opacity = 0;
              setTimeout(()=>{
                imgEl.src = encodeURI(newSrc);
                imgEl.style.transform = 'scale(1.03)';
                imgEl.style.opacity = 1;
                setTimeout(()=>{ imgEl.style.transform = 'scale(1)'; }, 380);
              }, 160);
            }
            // actualizar tallas según género
            const list = (c.sizeByGender && c.sizeByGender[gen]) ? c.sizeByGender[gen] : (c.sizes||[]);
            renderSizes(list);
          });
        });
        // No activamos ninguno por defecto: así se ve la portada hasta que el usuario pulse.
      }
    }
    $('#incQty')?.addEventListener('click',()=>{ qty++; $('#qty').textContent=qty; });
    $('#decQty')?.addEventListener('click',()=>{ if(qty>1){ qty--; $('#qty').textContent=qty; } });
    // Fechas
    const startInput = document.getElementById('startDate');
    const endInput = document.getElementById('endDate');
    const daysInfo = document.getElementById('daysInfo');
    // Establecer mínimo = hoy
    const todayStr = new Date().toISOString().slice(0,10);
    if(startInput) startInput.setAttribute('min', todayStr);
    if(endInput) endInput.setAttribute('min', todayStr);
    function updateDays(){
      const s = startInput.value; const e = endInput.value;
      if(!s || !e){ daysInfo.textContent='Selecciona fecha inicio y fin.'; return 0; }
      const sd = new Date(s); const ed = new Date(e);
      const nowDateOnly = new Date(todayStr);
      if(sd < nowDateOnly){ daysInfo.textContent='La fecha de inicio no puede ser anterior a hoy.'; return 0; }
      if(ed < sd){ daysInfo.textContent='La fecha final debe ser mayor o igual.'; return 0; }
      const diff = Math.round((ed - sd)/(1000*60*60*24)) + 1; // inclusive
      daysInfo.textContent = diff + (diff===1? ' día seleccionado.' : ' días seleccionados.');
      return diff;
    }
    startInput?.addEventListener('change',updateDays);
    endInput?.addEventListener('change',updateDays);
    // Agregar combinación a la lista temporal
    function renderCombinations(){
      const box = document.getElementById('comboList');
      if(!box) return;
      if(combinations.length===0){ box.innerHTML = '<small style="color:#6b7280">No hay combinaciones agregadas todavía.</small>'; return; }
      box.innerHTML = combinations.map((it, idx)=>{
        return `<div style="display:flex;align-items:center;justify-content:space-between;gap:8px;padding:6px 0;border-bottom:1px solid #f3f4f6">
          <div style="font-size:13px;color:#374151">${it.gender} • Talla ${it.size} • ${it.color} • Cant: ${it.qty} • ${it.startDate} → ${it.endDate} (${it.days}d)</div>
          <div style="display:flex;gap:6px">
            <button class="qty-btn" data-cidx="${idx}" data-cact="dec">-</button>
            <button class="qty-btn" data-cidx="${idx}" data-cact="inc">+</button>
            <button class="remove-btn" data-cidx="${idx}" data-cact="rm">Eliminar</button>
          </div>
        </div>`;
      }).join('');
      // acciones cantidad y eliminar
      Array.from(box.querySelectorAll('[data-cidx]')).forEach(btn=>{
        btn.addEventListener('click',()=>{
          const i = parseInt(btn.getAttribute('data-cidx'));
          const act = btn.getAttribute('data-cact');
          if(act==='inc') combinations[i].qty += 1;
          if(act==='dec') combinations[i].qty = Math.max(1, combinations[i].qty - 1);
          if(act==='rm') combinations.splice(i,1);
          renderCombinations();
        });
      });
    }

    $('#addCombination')?.addEventListener('click',()=>{
      const size = $$('.size-btn').find(b=>b.classList.contains('active'))?.textContent||'';
      const color = $$('.color-dot').find(b=>b.classList.contains('active'))?.getAttribute('title')||'';
      const gen = $$('.gender-btn').find(b=>b.classList.contains('active'))?.getAttribute('data-gen')||'';
      const days = updateDays();
      const sDate = startInput?.value||'';
      const eDate = endInput?.value||'';
      if(!size||!color||!sDate||!eDate||days===0){ alert('Completa género, talla, color y fechas válidas'); return; }
      const combo = { id:c.id, name:c.name, gender:gen||'N/A', size, color, qty, startDate:sDate, endDate:eDate, days, pricePerDay: parseFloat(c.price.replace('C$','').trim()), image: document.getElementById('mainImage')?.src || c.image };
      // merge por misma combinación en la lista temporal
      const key = (x)=> `${x.gender}|${x.size}|${x.color}|${x.startDate}|${x.endDate}`;
      const idx = combinations.findIndex(x=> key(x)===key(combo));
      if(idx>=0){ combinations[idx].qty += combo.qty; } else { combinations.push(combo); }
      renderCombinations();
    });
    $('#clearCombinations')?.addEventListener('click',()=>{ combinations.splice(0,combinations.length); renderCombinations(); });

    $('#reserveBtn')?.addEventListener('click',()=>{
      const size = $$('.size-btn').find(b=>b.classList.contains('active'))?.textContent||'';
      const color = $$('.color-dot').find(b=>b.classList.contains('active'))?.getAttribute('title')||'';
      const gen = $$('.gender-btn').find(b=>b.classList.contains('active'))?.getAttribute('data-gen')||'';
      const days = updateDays();
      const sDate = startInput?.value||'';
      const eDate = endInput?.value||'';
      if(!size||!color||!sDate||!eDate||days===0){ alert('Completa género, talla, color y fechas válidas'); return; }
      const priceNumber = parseFloat(c.price.replace('C$','').trim());
      const total = priceNumber * qty * days;
      const msg = `Hola! Quiero reservar:\nTraje: ${c.name}\nGénero: ${gen||'N/A'}\nTalla: ${size}\nColor: ${color}\nCantidad: ${qty}\nDesde: ${sDate}\nHasta: ${eDate}\nDías: ${days}\nPrecio día: ${c.price}\nTotal: C$ ${total}`;
      window.open(`https://wa.me/50558192798?text=${encodeURIComponent(msg)}`,'_blank');
      closeModal();
    });

    // Agregar todo al carrito (todas las combinaciones acumuladas)
    $('#addToCartBtn')?.addEventListener('click',()=>{
      if(combinations.length===0){
        alert('Primero agrega al menos una combinación a la lista.');
        return;
      }
      combinations.forEach(it=> addCartItem(it));
      closeModal();
      openCart();
    });
  }

  // Galería
  function renderGallery(){
    const grid = $('#galleryGrid'); if(!grid) return;
    grid.innerHTML = trajes.map(t=>`
      <div class="card gallery-card fade-in" data-id="${t.id}">
        <div style="height:240px;background:#f3f4f6;overflow:hidden;border-radius:16px"><img src="${encodeURI(t.image)}" alt="${t.name}" style="width:100%;height:100%;object-fit:cover;transition:transform 1.2s"/></div>
        <h3 style="margin:12px 0 4px">${t.name}</h3>
        <p style="font-size:13px;color:#6b7280">${t.baile}</p>
        <button class="btn outline" data-hist="${t.id}">Ver Historia</button>
        <div class="gallery-detail-slot" aria-hidden="true"></div>
      </div>`).join('');
    $$('button[data-hist]').forEach(b=> b.addEventListener('click',()=> showDetalle(parseInt(b.getAttribute('data-hist')))) );
  }

  function showDetalle(id){
    const t = trajes.find(x=>x.id===id); if(!t) return;
    // Cerrar cualquier otro detalle abierto
    Array.from(document.querySelectorAll('.gallery-detail-slot')).forEach(slot=>{
      slot.setAttribute('aria-hidden','true');
      slot.innerHTML = '';
    });
    const card = document.querySelector(`.gallery-card[data-id="${id}"]`);
    const slot = card?.querySelector('.gallery-detail-slot');
    if(!slot) return;
    slot.setAttribute('aria-hidden','false');
    slot.innerHTML = `<div class="detail-card in-gallery"><h3>${t.name}</h3><p><strong>Región:</strong> ${t.region}</p><p>${t.historia}</p><h4 style="margin-top:16px">Características</h4><ul>${t.caracteristicas.map(c=>`<li>${c}</li>`).join('')}</ul><div style="text-align:right;margin-top:20px"><button class="btn outline" data-close="${t.id}">Cerrar</button></div></div>`;
    slot.querySelector(`[data-close="${t.id}"]`)?.addEventListener('click',()=>{ slot.setAttribute('aria-hidden','true'); slot.innerHTML=''; });
  }

  // Inicialización
  renderRegions();
  renderCostumes();
  renderGallery();

})();

// Accesibilidad mínima para foco teclado en elementos creados dinámicamente
window.addEventListener('keydown',e=>{
  if(e.key==='Escape'){ const modal=document.getElementById('modal'); if(modal && !modal.classList.contains('hidden')) modal.classList.add('hidden'); }
});

// --- Carrito de alquiler ---
(function(){
  const CART_KEY = 'flor_cart_v1';
  const $ = s => document.querySelector(s);
  const $$ = s => Array.from(document.querySelectorAll(s));

  function readCart(){
    try{ return JSON.parse(localStorage.getItem(CART_KEY)||'[]'); }catch(e){ return []; }
  }
  function writeCart(items){
    localStorage.setItem(CART_KEY, JSON.stringify(items));
    updateCounters(items);
  }
  function updateCounters(items){
    const count = items.reduce((a,b)=> a + (b.qty||1), 0);
    const el1 = document.getElementById('cartCount');
    const el2 = document.getElementById('cartCountMobile');
    if(el1) el1.textContent = String(count);
    if(el2) el2.textContent = String(count);
  }
  function formatCurrency(n){
    return `C$ ${Number(n).toFixed(2)}`;
  }

  function renderCart(){
    const items = readCart();
    updateCounters(items);
    const list = document.getElementById('cartItems'); if(!list) return;
    if(items.length===0){
      list.innerHTML = '<p style="color:#374151">Tu carrito está vacío.</p>';
      const btn = document.getElementById('cartWhatsApp'); if(btn) btn.disabled = true;
      document.getElementById('cartTotal')?.replaceChildren(document.createTextNode('C$ 0'));
      return;
    }
    let total = 0;
    list.innerHTML = items.map((it, idx)=>{
      const lineTotal = it.pricePerDay * it.qty * it.days;
      total += lineTotal;
      return `<div class="cart-item" data-idx="${idx}">
        <img src="${encodeURI(it.image||'assets/image.png')}" alt="${it.name}">
        <div>
          <div class="cart-item-title">${it.name}</div>
          <div class="cart-item-meta">${it.gender} • Talla ${it.size} • ${it.color}<br> ${it.startDate} → ${it.endDate} (${it.days} días)</div>
          <div class="cart-item-meta">Precio día: ${formatCurrency(it.pricePerDay)} • Subtotal: ${formatCurrency(lineTotal)}</div>
        </div>
        <div class="cart-item-actions">
          <button class="qty-btn" data-action="dec">-</button>
          <span>${it.qty}</span>
          <button class="qty-btn" data-action="inc">+</button>
          <button class="remove-btn" data-action="rm">Eliminar</button>
        </div>
      </div>`;
    }).join('');
    document.getElementById('cartTotal').textContent = formatCurrency(total);
    const btn = document.getElementById('cartWhatsApp'); if(btn) btn.disabled = false;

    // acciones
    $$('.cart-item .qty-btn').forEach(b=>{
      b.addEventListener('click',()=>{
        const idx = parseInt(b.closest('.cart-item').getAttribute('data-idx'));
        const action = b.getAttribute('data-action');
        const items2 = readCart();
        if(action==='inc') items2[idx].qty += 1;
        if(action==='dec') items2[idx].qty = Math.max(1, items2[idx].qty - 1);
        writeCart(items2);
        renderCart();
      });
    });
    $$('.cart-item .remove-btn').forEach(b=>{
      b.addEventListener('click',()=>{
        const idx = parseInt(b.closest('.cart-item').getAttribute('data-idx'));
        const items2 = readCart();
        items2.splice(idx,1);
        writeCart(items2);
        renderCart();
      });
    });
  }

  // API pública para agregar
  window.addCartItem = function(item){
    const items = readCart();
    // merge por misma combinación
    const key = (x)=> `${x.id}|${x.gender}|${x.size}|${x.color}|${x.startDate}|${x.endDate}`;
    const idx = items.findIndex(x=> key(x)===key(item));
    if(idx>=0){ items[idx].qty += item.qty; } else { items.push(item); }
    writeCart(items);
    renderCart();
  };

  // WhatsApp
  function buildWhatsAppMessage(items){
    let lines = [
      'Hola! Quiero reservar los siguientes trajes:',
      ''
    ];
    let total = 0;
    items.forEach((it, i)=>{
      const subtotal = it.pricePerDay * it.qty * it.days;
      total += subtotal;
      lines.push(`${i+1}. ${it.name}`);
      lines.push(`   Género: ${it.gender} | Talla: ${it.size} | Color: ${it.color}`);
      lines.push(`   Cantidad: ${it.qty} | ${it.startDate} → ${it.endDate} (${it.days} días)`);
      lines.push(`   Precio día: C$ ${it.pricePerDay} | Subtotal: C$ ${subtotal.toFixed(2)}`);
      lines.push('');
    });
    lines.push(`Total estimado: C$ ${total.toFixed(2)}`);
    return lines.join('\n');
  }

  function openCart(){
    const drawer = document.getElementById('cartDrawer');
    if(drawer){ drawer.classList.remove('hidden'); drawer.setAttribute('aria-hidden','false'); }
  }
  function closeCart(){
    const drawer = document.getElementById('cartDrawer');
    if(drawer){ drawer.classList.add('hidden'); drawer.setAttribute('aria-hidden','true'); }
  }
  window.openCart = openCart;

  // eventos UI
  document.getElementById('cartToggle')?.addEventListener('click',()=>{ openCart(); renderCart(); });
  document.getElementById('cartToggleMobile')?.addEventListener('click',()=>{ openCart(); renderCart(); });
  document.getElementById('cartClose')?.addEventListener('click',closeCart);
  document.getElementById('cartClear')?.addEventListener('click',()=>{ writeCart([]); renderCart(); });
  document.getElementById('cartWhatsApp')?.addEventListener('click',()=>{
    const items = readCart(); if(items.length===0) return;
    const msg = buildWhatsAppMessage(items);
    window.open(`https://wa.me/50558192798?text=${encodeURIComponent(msg)}`,'_blank');
  });

  // inicializar contadores y render si ya hay items
  updateCounters(readCart());
})();
