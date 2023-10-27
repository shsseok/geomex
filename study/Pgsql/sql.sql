-- 1. point 생성
select st_makepoint(127.725704804671, 37.8778388677082);

-- 2. srid 추가
select st_setsrid(st_makepoint(127.725704804671, 37.8778388677082), 4326);

-- 3. 5179 좌표변환
select st_astext(st_transform(st_setsrid(st_makepoint(127.7373726,37.8818308), 4326), 5186));

-- 포인트가 속한 읍면동 뽑기
select * from xeus.kais_emd_as where st_contains(_geometry, st_transform(st_setsrid(st_makepoint(127.7373726,37.8818308),4326),5186))

-- 포인트 100m buffer
select st_buffer(st_transform(st_setsrid(st_makepoint(127.7373726,37.8818308), 4326),5186), 100);

select st_centroid()--중심점 

-- 100m buffer 포인트 읍면동 조회(st_intersects)
select * from xeus.kais_emd_as where st_intersects(_geometry, st_buffer(st_transform(st_setsrid(st_makepoint(127.7373726,37.8818308),4326),5186),1000))
select * from xeus.kais_emd_as where st_dwithin(_geometry, st_transform(st_setsrid(st_makepoint(127.7373726,37.8818308), 4326), 5186), 1000)
select * from xeus.kais_emd_as where st_distance(  _geometry, st_transform(st_setsrid(st_makepoint(127.7373726,37.8818308), 4326), 5186)) < 1000
-- 100m buffer 포인트 읍면동 조회(st_dwithin)

select * into public.asset_cctv from xeus.asset_cctv
