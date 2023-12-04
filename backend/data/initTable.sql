CREATE TABLE loai_xe (
  id INT PRIMARY KEY,
  ten_loai VARCHAR(255)
);

CREATE TABLE hang_xe (
  id INT PRIMARY KEY,
  ten_hang VARCHAR(255)
);

CREATE TABLE dong_xe (
  id INT PRIMARY KEY,
  ten_dong VARCHAR(255),
  id_hang_xe int,
  FOREIGN KEY (id_hang_xe) REFERENCES hang_xe(id)
);

CREATE TABLE mau_sac (
  id INT PRIMARY KEY,
  mau_sac VARCHAR(255)
);

CREATE TABLE hinh_anh (
  id INT PRIMARY KEY,
  id_xe_may INT,
  src VARCHAR(255),
  FOREIGN KEY (id_xe_may) REFERENCES xe_may(id)
);

CREATE TABLE xe_may (
  id INT PRIMARY KEY,
  sku VARCHAR(255) UNIQUE,
  ten_xe VARCHAR(255),
  mo_ta TEXT,
  thong_so_ky_thuat TEXT,
  so_km_da_di INT,
  dung_tich_xe INT,
  xuat_xu VARCHAR(255),
  id_loai_xe INT,
  id_hang_xe INT,
  created_date DATETIME,
  updated_date DATETIME,
  deleted_date DATETIME,
  FOREIGN KEY (id_loai_xe) REFERENCES loai_xe(id),
  FOREIGN KEY (id_hang_xe) REFERENCES hang_xe(id)
);

CREATE TABLE xe_may_mau_sac (
  id_xe_may INT,
  id_mau_sac INT,
  so_luong_ton_kho INT,
  gia_ban DECIMAL(18),
  PRIMARY KEY (id_xe_may, id_mau_sac),
  FOREIGN KEY (id_xe_may) REFERENCES xe_may(id),
  FOREIGN KEY (id_mau_sac) REFERENCES mau_sac(id)
);