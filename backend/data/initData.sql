-- Bảng loai_xe
INSERT INTO loai_xe (id, ten_loai)
VALUES (1, 'Xe số'),
       (2, 'Xe tay ga'),
       (3, 'Xe côn'),
       (4, 'Moto');

-- Bảng hang_xe
INSERT INTO hang_xe (id, ten_hang)
VALUES (1, 'Honda'),
       (2, 'Yamaha'),
       (3, 'Suzuki'),
       (4, 'Piaggio'),
       (5, 'SYM');

-- Bảng dong_xe
INSERT INTO dong_xe (id, ten_dong, id_hang_xe)
VALUES (1, 'Wave Alpha', 1),
       (2, 'Exciter', 2),
       (3, 'Raider', 2),
       (4, 'Hayate', 3),
       (5, 'Vespa', 4),
       (6, 'Attila', 5);

-- Bảng mau_sac
INSERT INTO mau_sac (id, mau_sac)
VALUES (1, 'Đen'),
       (2, 'Trắng'),
       (3, 'Xanh'),
       (4, 'Đỏ'),
       (5, 'Vàng');


-- Bảng xe_may
INSERT INTO xe_may (id, sku, ten_xe, mo_ta, thong_so_ky_thuat, so_km_da_di, dung_tich_xe, xuat_xu, id_loai_xe, id_hang_xe, hinh_anh)
VALUES 
(3, 'XEM003', 'Raider 150', 'Xe côn Raider màu đỏ', 'Thông số kỹ thuật của Raider', 3000, 150, 'Việt Nam', 3, 2, 'raider_red.jpg'),
(4, 'XEM004', 'Hayate 125', 'Xe số Hayate màu xanh', 'Thông số kỹ thuật của Hayate', 4000, 125, 'Việt Nam', 1, 3, 'hayate_green.jpg'),
(56, 'XEM056', 'Wave RSX FI', 'Xe số Wave RSX FI màu xanh', 'Thông số kỹ thuật của Wave RSX FI', 2000, 110, 'Việt Nam', 1, 1, 'wave_rsx_blue.jpg'),
(57, 'XEM057', 'Exciter 155 VVA GP', 'Xe côn Exciter màu đen', 'Thông số kỹ thuật của Exciter GP', 3000, 155, 'Việt Nam', 3, 2, 'exciter_black.jpg'),
(58, 'XEM058', 'Vespa GTS Super', 'Xe tay ga Vespa màu trắng', 'Thông số kỹ thuật của Vespa GTS Super', 1000, 300, 'Ý', 2, 4, 'vespa_gts_white.jpg'),
(59, 'XEM059', 'Attila Victoria', 'Xe tay ga Attila màu đen', 'Thông số kỹ thuật của Attila Victoria', 2000, 125, 'Việt Nam', 2, 5, 'attila_black.jpg'),
(60, 'XEM060', 'Raider 150 S Edition', 'Xe côn Raider màu xanh', 'Thông số kỹ thuật của Raider S Edition', 5000, 150, 'Việt Nam', 3, 2, 'raider_green.jpg'),
-- Thêm dữ liệu cho 25 dòng còn lại
(85, 'XEM085', 'Wave Alpha White', 'Xe số Wave Alpha màu trắng', 'Thông số kỹ thuật của Wave Alpha', 6000, 110, 'Việt Nam', 1, 1, 'wave_alpha_white.jpg'),
(86, 'XEM086', 'Exciter 155 VVA GP Limited Edition', 'Xe côn Exciter màu đen', 'Thông số kỹ thuật của Exciter GP Limited Edition', 7000, 155, 'Việt Nam', 3, 2, 'exciter_gp_black.jpg'),
(87, 'XEM087', 'Vespa Primavera 150', 'Xe tay ga Vespa màu trắng', 'Thông số kỹ thuật của Vespa Primavera', 4000, 150, 'Ý', 2, 4, 'vespa_primavera_white.jpg'),
(88, 'XEM088', 'Attila Grace', 'Xe tay ga Attila màu đen', 'Thông số kỹ thuật của Attila Grace', 3000, 125, 'Việt Nam', 2, 5, 'attila_grace_black.jpg'),
(89, 'XEM089', 'Raider 150 Sport Edition', 'Xe côn Raider màu xanh', 'Thông số kỹ thuật của Raider Sport Edition', 10000, 150, 'Việt Nam', 3, 2, 'raider_sport_green.jpg');
-- Thêm dữ liệu cho 46 dòng còn lại

-- Bảng xe_may_mau_sac
INSERT INTO xe_may_mau_sac (id_xe_may, id_mau_sac, so_luong_ton_kho, gia_ban)
VALUES 
(3, 1, 10, 50000000),
(3, 2, 5, 52000000),
(4, 2, 8, 60000000),
(4, 3, 8, 60000000),
(56, 4, 8, 60000000),
(57, 2, 8, 60000000),
(58, 5, 8, 60000000),
(59, 2, 8, 60000000),
(60, 3, 8, 60000000),
(85, 2, 8, 60000000),
(85, 4, 8, 60000000),
(86, 5, 8, 60000000),
(87, 2, 8, 60000000),
(88, 2, 8, 60000000),
(89, 2, 8, 60000000);