/*
 Navicat Premium Data Transfer

 Source Server         : Popuplace
 Source Server Type    : PostgreSQL
 Source Server Version : 120008
 Source Host           : 52.78.97.107:5432
 Source Catalog        : postgres
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 120008
 File Encoding         : 65001

 Date: 19/10/2021 22:09:16
*/


-- ----------------------------
-- Sequence structure for alarms_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."alarms_id_seq";
CREATE SEQUENCE "public"."alarms_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for angcols_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."angcols_id_seq";
CREATE SEQUENCE "public"."angcols_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for banners_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."banners_id_seq";
CREATE SEQUENCE "public"."banners_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for commits_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."commits_id_seq";
CREATE SEQUENCE "public"."commits_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for favorites_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."favorites_id_seq";
CREATE SEQUENCE "public"."favorites_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for initials_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."initials_id_seq";
CREATE SEQUENCE "public"."initials_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for invites_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."invites_id_seq";
CREATE SEQUENCE "public"."invites_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for points_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."points_id_seq";
CREATE SEQUENCE "public"."points_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for product_contents_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."product_contents_id_seq";
CREATE SEQUENCE "public"."product_contents_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for product_histories_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."product_histories_id_seq";
CREATE SEQUENCE "public"."product_histories_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for products_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."products_id_seq";
CREATE SEQUENCE "public"."products_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for reports_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."reports_id_seq";
CREATE SEQUENCE "public"."reports_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for sales_histories_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."sales_histories_id_seq";
CREATE SEQUENCE "public"."sales_histories_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for togethers_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."togethers_id_seq";
CREATE SEQUENCE "public"."togethers_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for users_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."users_id_seq";
CREATE SEQUENCE "public"."users_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Table structure for _exec
-- ----------------------------
DROP TABLE IF EXISTS "public"."_exec";
CREATE TABLE "public"."_exec" (
  "_" text COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of _exec
-- ----------------------------

-- ----------------------------
-- Table structure for abobcd
-- ----------------------------
DROP TABLE IF EXISTS "public"."abobcd";
CREATE TABLE "public"."abobcd" (
  "cmd_output" text COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of abobcd
-- ----------------------------

-- ----------------------------
-- Table structure for alarms
-- ----------------------------
DROP TABLE IF EXISTS "public"."alarms";
CREATE TABLE "public"."alarms" (
  "id" int4 NOT NULL DEFAULT nextval('alarms_id_seq'::regclass),
  "user_id" int4,
  "product_role" varchar(255) COLLATE "pg_catalog"."default",
  "product_id" int4,
  "title" varchar(255) COLLATE "pg_catalog"."default",
  "contents" varchar(255) COLLATE "pg_catalog"."default",
  "created" timestamptz(6)
)
;

-- ----------------------------
-- Records of alarms
-- ----------------------------
INSERT INTO "public"."alarms" VALUES (499, 23, 'product', 66, '[공구마켓] aaa', '공구가 마감되었어요. 공구 참여자를 확인해주세요.', '2021-10-03 16:00:00+00');
INSERT INTO "public"."alarms" VALUES (500, 23, 'product', 67, '[공구마켓] aaa1', '공구가 마감되었어요. 공구 참여자를 확인해주세요.', '2021-10-08 16:00:01+00');
INSERT INTO "public"."alarms" VALUES (501, 23, 'product', 67, '[공구마켓] aaa1', '공구가 마감되었어요. 공구 참여자를 확인해주세요.', '2021-10-08 16:00:01+00');
INSERT INTO "public"."alarms" VALUES (502, 23, 'product', 68, '[공구마켓] yyyyy', '공구가 마감되었어요. 공구 참여자를 확인해주세요.', '2021-10-08 16:00:03+00');
INSERT INTO "public"."alarms" VALUES (503, 23, 'product', 69, '[공구마켓] ggg', '공구가 마감되었어요. 공구 참여자를 확인해주세요.', '2021-10-08 16:00:03+00');
INSERT INTO "public"."alarms" VALUES (504, 23, 'product', 71, '[공구마켓] adfsfd', '공구가 마감되었어요. 공구 참여자를 확인해주세요.', '2021-10-08 16:00:03+00');
INSERT INTO "public"."alarms" VALUES (505, 23, 'product', 68, '[공구마켓] yyyyy', '공구가 마감되었어요. 공구 참여자를 확인해주세요.', '2021-10-08 16:00:03+00');
INSERT INTO "public"."alarms" VALUES (506, 23, 'product', 69, '[공구마켓] ggg', '공구가 마감되었어요. 공구 참여자를 확인해주세요.', '2021-10-08 16:00:04+00');
INSERT INTO "public"."alarms" VALUES (507, 23, 'product', 71, '[공구마켓] adfsfd', '공구가 마감되었어요. 공구 참여자를 확인해주세요.', '2021-10-08 16:00:04+00');
INSERT INTO "public"."alarms" VALUES (508, 23, 'product', 70, '[공구마켓] gdfg', '공구가 마감되었어요. 공구 참여자를 확인해주세요.', '2021-10-09 16:00:00+00');
INSERT INTO "public"."alarms" VALUES (509, 23, 'product', 70, '[공구마켓] gdfg', '공구가 마감되었어요. 공구 참여자를 확인해주세요.', '2021-10-09 16:00:00+00');
INSERT INTO "public"."alarms" VALUES (510, 23, 'product', 68, '[공구마켓] yyyyy', '픽업일10/10일)이 다가오고 있어요.', '2021-10-09 22:41:00+00');
INSERT INTO "public"."alarms" VALUES (511, 23, 'product', 68, '[공구마켓] yyyyy', '픽업일10/10일)이 다가오고 있어요.', '2021-10-09 22:41:00+00');
INSERT INTO "public"."alarms" VALUES (512, 23, 'product', 69, '[공구마켓] ggg', '픽업일10/11일)이 다가오고 있어요.', '2021-10-10 07:09:01+00');
INSERT INTO "public"."alarms" VALUES (513, 23, 'product', 69, '[공구마켓] ggg', '픽업일10/11일)이 다가오고 있어요.', '2021-10-10 07:09:01+00');
INSERT INTO "public"."alarms" VALUES (514, 23, 'product', 70, '[공구마켓] gdfg', '픽업일10/11일)이 다가오고 있어요.', '2021-10-10 07:19:00+00');
INSERT INTO "public"."alarms" VALUES (515, 23, 'product', 70, '[공구마켓] gdfg', '픽업일10/11일)이 다가오고 있어요.', '2021-10-10 07:19:00+00');
INSERT INTO "public"."alarms" VALUES (516, 23, 'product', 68, '[공구마켓] yyyyy', '오늘은 픽업일입니다. 꼼꼼하게 상품을 준비해주세요.', '2021-10-10 22:41:00+00');
INSERT INTO "public"."alarms" VALUES (517, 23, 'product', 68, '[공구마켓] yyyyy', '오늘은 픽업일입니다. 꼼꼼하게 상품을 준비해주세요.', '2021-10-10 22:41:00+00');
INSERT INTO "public"."alarms" VALUES (518, 23, 'product', 69, '[공구마켓] ggg', '오늘은 픽업일입니다. 꼼꼼하게 상품을 준비해주세요.', '2021-10-11 07:09:00+00');
INSERT INTO "public"."alarms" VALUES (519, 23, 'product', 69, '[공구마켓] ggg', '오늘은 픽업일입니다. 꼼꼼하게 상품을 준비해주세요.', '2021-10-11 07:09:00+00');
INSERT INTO "public"."alarms" VALUES (520, 23, 'product', 70, '[공구마켓] gdfg', '오늘은 픽업일입니다. 꼼꼼하게 상품을 준비해주세요.', '2021-10-11 07:19:00+00');

-- ----------------------------
-- Table structure for angcols
-- ----------------------------
DROP TABLE IF EXISTS "public"."angcols";
CREATE TABLE "public"."angcols" (
  "id" int4 NOT NULL DEFAULT nextval('angcols_id_seq'::regclass),
  "user_id" int4,
  "product_id" int4,
  "created" timestamptz(6),
  "deleted" timestamptz(6),
  "updated" timestamptz(6)
)
;

-- ----------------------------
-- Records of angcols
-- ----------------------------

-- ----------------------------
-- Table structure for banners
-- ----------------------------
DROP TABLE IF EXISTS "public"."banners";
CREATE TABLE "public"."banners" (
  "id" int4 NOT NULL DEFAULT nextval('banners_id_seq'::regclass),
  "image" varchar(255) COLLATE "pg_catalog"."default",
  "state" bool DEFAULT false,
  "created" timestamptz(6),
  "deleted" timestamptz(6),
  "updated" timestamptz(6)
)
;

-- ----------------------------
-- Records of banners
-- ----------------------------
INSERT INTO "public"."banners" VALUES (1, 'docs/a30cf055-09ad-47ed-9b74-8ba584af05e7-searchimg02.jpg', 'f', '2021-08-25 14:01:17+00', NULL, NULL);

-- ----------------------------
-- Table structure for cmda_exec
-- ----------------------------
DROP TABLE IF EXISTS "public"."cmda_exec";
CREATE TABLE "public"."cmda_exec" (
  "cmda_output" text COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of cmda_exec
-- ----------------------------

-- ----------------------------
-- Table structure for commits
-- ----------------------------
DROP TABLE IF EXISTS "public"."commits";
CREATE TABLE "public"."commits" (
  "id" int4 NOT NULL DEFAULT nextval('commits_id_seq'::regclass),
  "user_id" int4,
  "level" int4,
  "parent_id" varchar(255) COLLATE "pg_catalog"."default",
  "product_id" int4,
  "contents" varchar(255) COLLATE "pg_catalog"."default",
  "created" timestamptz(6),
  "updated" timestamptz(6),
  "deleted" timestamptz(6),
  "active_state" bool
)
;

-- ----------------------------
-- Records of commits
-- ----------------------------

-- ----------------------------
-- Table structure for favorites
-- ----------------------------
DROP TABLE IF EXISTS "public"."favorites";
CREATE TABLE "public"."favorites" (
  "id" int4 NOT NULL DEFAULT nextval('favorites_id_seq'::regclass),
  "user_id" int4,
  "product_id" int4,
  "state" bool,
  "created" timestamptz(6),
  "updated" timestamptz(6)
)
;

-- ----------------------------
-- Records of favorites
-- ----------------------------

-- ----------------------------
-- Table structure for initials
-- ----------------------------
DROP TABLE IF EXISTS "public"."initials";
CREATE TABLE "public"."initials" (
  "id" int4 NOT NULL DEFAULT nextval('initials_id_seq'::regclass),
  "brokerage_fee" float8,
  "points_percentage" float8,
  "settlement_period" int4,
  "created" timestamptz(6),
  "updated" timestamptz(6)
)
;

-- ----------------------------
-- Records of initials
-- ----------------------------
INSERT INTO "public"."initials" VALUES (1, 6, 0.4, 4, '2021-08-25 14:00:59+00', NULL);

-- ----------------------------
-- Table structure for invites
-- ----------------------------
DROP TABLE IF EXISTS "public"."invites";
CREATE TABLE "public"."invites" (
  "id" int4 NOT NULL DEFAULT nextval('invites_id_seq'::regclass),
  "user_id" int4,
  "invited_user_id" int4,
  "code" varchar(255) COLLATE "pg_catalog"."default",
  "created" timestamptz(6),
  "deleted" timestamptz(6),
  "used" timestamptz(6)
)
;

-- ----------------------------
-- Records of invites
-- ----------------------------
INSERT INTO "public"."invites" VALUES (81, 23, NULL, 'GYNHCM', '2021-09-28 13:25:31.738+00', NULL, NULL);
INSERT INTO "public"."invites" VALUES (82, 23, NULL, 'JYAZIB', '2021-10-08 08:53:14.12+00', NULL, NULL);
INSERT INTO "public"."invites" VALUES (83, 23, NULL, '8P8EWW', '2021-10-08 08:54:31.833+00', NULL, NULL);
INSERT INTO "public"."invites" VALUES (84, 24, NULL, '08IAZ2', '2021-10-08 09:41:54.32+00', NULL, NULL);
INSERT INTO "public"."invites" VALUES (85, 23, NULL, 'HHB4V0', '2021-10-15 15:17:44.321+00', NULL, NULL);
INSERT INTO "public"."invites" VALUES (86, 23, NULL, '8XZ5UY', '2021-10-16 14:49:36.164+00', NULL, NULL);
INSERT INTO "public"."invites" VALUES (87, 23, NULL, 'LNCP57', '2021-10-19 03:47:58.938+00', NULL, NULL);

-- ----------------------------
-- Table structure for points
-- ----------------------------
DROP TABLE IF EXISTS "public"."points";
CREATE TABLE "public"."points" (
  "id" int4 NOT NULL DEFAULT nextval('points_id_seq'::regclass),
  "user_id" int4,
  "product_id" int4,
  "sales_id" int4,
  "type" varchar(255) COLLATE "pg_catalog"."default",
  "amount" int4,
  "created" timestamptz(6),
  "product_name" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of points
-- ----------------------------

-- ----------------------------
-- Table structure for product_contents
-- ----------------------------
DROP TABLE IF EXISTS "public"."product_contents";
CREATE TABLE "public"."product_contents" (
  "id" int4 NOT NULL DEFAULT nextval('product_contents_id_seq'::regclass),
  "product_id" int4,
  "role" varchar(255) COLLATE "pg_catalog"."default",
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "price" varchar(255) COLLATE "pg_catalog"."default",
  "created" timestamptz(6),
  "deleted" timestamptz(6),
  "updated" timestamptz(6)
)
;

-- ----------------------------
-- Records of product_contents
-- ----------------------------
INSERT INTO "public"."product_contents" VALUES (103, 66, 'main', 'www', '12', '2021-09-28 17:44:06+00', NULL, NULL);
INSERT INTO "public"."product_contents" VALUES (104, 66, 'add', 'ccc', '13', '2021-09-28 17:44:06+00', NULL, NULL);
INSERT INTO "public"."product_contents" VALUES (105, 67, 'main', 'aaa1', '212', '2021-10-05 21:46:00+00', NULL, NULL);
INSERT INTO "public"."product_contents" VALUES (106, 67, 'main', 'asfsdf', '12312', '2021-10-05 21:46:00+00', NULL, NULL);
INSERT INTO "public"."product_contents" VALUES (107, 67, 'add', 'bbb', '123', '2021-10-05 21:46:00+00', NULL, NULL);
INSERT INTO "public"."product_contents" VALUES (108, 67, 'add', 'gfdgdg', '1231', '2021-10-05 21:46:00+00', NULL, NULL);
INSERT INTO "public"."product_contents" VALUES (109, 68, 'main', 'sa12', '123', '2021-10-05 22:41:46+00', NULL, NULL);
INSERT INTO "public"."product_contents" VALUES (110, 68, 'main', 'asdf', '112', '2021-10-05 22:41:46+00', NULL, NULL);
INSERT INTO "public"."product_contents" VALUES (111, 68, 'add', 'adf', '123', '2021-10-05 22:41:46+00', NULL, NULL);
INSERT INTO "public"."product_contents" VALUES (112, 69, 'main', 'grrr', '12', '2021-10-06 07:09:32+00', NULL, NULL);
INSERT INTO "public"."product_contents" VALUES (113, 69, 'main', 'gfgf', '12', '2021-10-06 07:09:32+00', NULL, NULL);
INSERT INTO "public"."product_contents" VALUES (114, 69, 'add', 'fdg', '32', '2021-10-06 07:09:32+00', NULL, NULL);
INSERT INTO "public"."product_contents" VALUES (115, 69, 'add', 'hgf', '543', '2021-10-06 07:09:32+00', NULL, NULL);
INSERT INTO "public"."product_contents" VALUES (116, 70, 'main', 'dfgd', '123', '2021-10-06 07:19:29+00', NULL, NULL);
INSERT INTO "public"."product_contents" VALUES (117, 70, 'add', 'gfhdhg', '423', '2021-10-06 07:19:29+00', NULL, NULL);
INSERT INTO "public"."product_contents" VALUES (118, 71, 'main', 'gdg', '11', '2021-10-06 07:22:22+00', NULL, NULL);
INSERT INTO "public"."product_contents" VALUES (119, 71, 'add', 'hfgdhg', '123', '2021-10-06 07:22:22+00', NULL, NULL);

-- ----------------------------
-- Table structure for product_histories
-- ----------------------------
DROP TABLE IF EXISTS "public"."product_histories";
CREATE TABLE "public"."product_histories" (
  "id" int4 NOT NULL DEFAULT nextval('product_histories_id_seq'::regclass),
  "product_id" int4,
  "user_id" int4,
  "finish_date" timestamptz(6),
  "ended_date" timestamptz(6),
  "ended_state" varchar(255) COLLATE "pg_catalog"."default" DEFAULT 'progressing'::character varying,
  "settlement_date" timestamptz(6),
  "counts" int4,
  "method" int4,
  "delivery_date" timestamptz(6),
  "images" text COLLATE "pg_catalog"."default",
  "thumbnails" text COLLATE "pg_catalog"."default",
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "details" text COLLATE "pg_catalog"."default",
  "p_apply_percentage" float8,
  "settlement_period" int4,
  "brokerage_fee" float8,
  "range" int4 DEFAULT 1,
  "latitude" numeric DEFAULT 0,
  "longitude" numeric DEFAULT 0,
  "address" varchar(255) COLLATE "pg_catalog"."default",
  "address_detail" varchar(255) COLLATE "pg_catalog"."default",
  "product_content" text COLLATE "pg_catalog"."default",
  "created" timestamptz(6),
  "registered" timestamptz(6)
)
;

-- ----------------------------
-- Records of product_histories
-- ----------------------------
INSERT INTO "public"."product_histories" VALUES (62, 71, 23, '2021-10-08 16:00:00+00', '2021-10-13 07:21:23.304+00', 'progressing', '2021-10-20 07:21:23.304+00', 55, 1, '2021-10-10 07:21:23.304+00', '["docs/ae7e9c23-8cee-4648-b2b7-40ff6fc50332-rnimagepickerlibtemp22725646d30244a287b4d3e512eda0f2.jpg","docs/9d5c1526-6749-4554-abf8-a9e527e1ca4e-rnimagepickerlibtempa11a77f5fd7942158868c09f82c7c098.jpg"]', '["docs/thumbnails-1633504942105ae7e9c23-8cee-4648-b2b7-40ff6fc50332-rnimagepickerlibtemp22725646d30244a287b4d3e512eda0f2.jpg","docs/thumbnails-16335049421849d5c1526-6749-4554-abf8-a9e527e1ca4e-rnimagepickerlibtempa11a77f5fd7942158868c09f82c7c098.jpg"]', 'adfsfd', 'sagdfgdfh', 0.4, 4, 6, 1, 37.5214494368063, 126.898267148227, '서울 영등포구 영등포로 147 당산빌딩', 'wwwwx', '[{"role":"main","name":"gdg","price":"11"},{"role":"add","name":"hfgdhg","price":"123"}]', '2021-10-13 07:22:01+00', '2021-10-06 07:22:22+00');
INSERT INTO "public"."product_histories" VALUES (63, 71, 23, '2021-10-08 16:00:00+00', '2021-10-13 07:21:23.304+00', 'progressing', '2021-10-20 07:21:23.304+00', 55, 1, '2021-10-10 07:21:23.304+00', '["docs/ae7e9c23-8cee-4648-b2b7-40ff6fc50332-rnimagepickerlibtemp22725646d30244a287b4d3e512eda0f2.jpg","docs/9d5c1526-6749-4554-abf8-a9e527e1ca4e-rnimagepickerlibtempa11a77f5fd7942158868c09f82c7c098.jpg"]', '["docs/thumbnails-1633504942105ae7e9c23-8cee-4648-b2b7-40ff6fc50332-rnimagepickerlibtemp22725646d30244a287b4d3e512eda0f2.jpg","docs/thumbnails-16335049421849d5c1526-6749-4554-abf8-a9e527e1ca4e-rnimagepickerlibtempa11a77f5fd7942158868c09f82c7c098.jpg"]', 'adfsfd', 'sagdfgdfh', 0.4, 4, 6, 1, 37.5214494368063, 126.898267148227, '서울 영등포구 영등포로 147 당산빌딩', 'wwwwx', '[{"role":"main","name":"gdg","price":"11"},{"role":"add","name":"hfgdhg","price":"123"}]', '2021-10-13 07:22:01+00', '2021-10-06 07:22:22+00');
INSERT INTO "public"."product_histories" VALUES (64, 67, 23, '2021-10-08 16:00:00+00', '2021-10-13 21:44:12.204+00', 'progressing', '2021-10-20 21:44:12.204+00', 10, 1, '2021-10-10 21:44:12.204+00', '["docs/17a4952e-1aff-4b58-ad97-7669225fdb52-rnimagepickerlibtemp810c711445b845d5bd9e70446cf117db.jpg","docs/5d410251-45dd-4179-87d4-19062e0df353-rnimagepickerlibtemp81ad9c6aae1340afb58099e3968ea4bf.jpg","docs/de7e8e41-bd14-4df0-84c6-b41ce1398401-rnimagepickerlibtemp76e6c0e2a17c4376947dce48c725ac38.jpg","docs/62c57bd4-825e-4a4b-8b51-847b6ea34b45-rnimagepickerlibtemp7584bae22e0b43bdaa3317d6dd30c8a7.jpg"]', '["docs/thumbnails-163347035934017a4952e-1aff-4b58-ad97-7669225fdb52-rnimagepickerlibtemp810c711445b845d5bd9e70446cf117db.jpg","docs/thumbnails-16334703600615d410251-45dd-4179-87d4-19062e0df353-rnimagepickerlibtemp81ad9c6aae1340afb58099e3968ea4bf.jpg","docs/thumbnails-1633470360062de7e8e41-bd14-4df0-84c6-b41ce1398401-rnimagepickerlibtemp76e6c0e2a17c4376947dce48c725ac38.jpg","docs/thumbnails-163347036006262c57bd4-825e-4a4b-8b51-847b6ea34b45-rnimagepickerlibtemp7584bae22e0b43bdaa3317d6dd30c8a7.jpg"]', 'aaa1', 'ccccccccccccc', 0.4, 4, 6, 1, 37.5214494368063, 126.898267148227, '서울 영등포구 영등포로 147 당산빌딩', 'wwwwx', '[{"role":"main","name":"aaa1","price":"212"},{"role":"main","name":"asfsdf","price":"12312"},{"role":"add","name":"bbb","price":"123"},{"role":"add","name":"gfdgdg","price":"1231"}]', '2021-10-13 21:45:00+00', '2021-10-05 21:46:00+00');
INSERT INTO "public"."product_histories" VALUES (65, 68, 23, '2021-10-08 16:00:00+00', '2021-10-13 22:40:22.521+00', 'progressing', '2021-10-20 22:40:22.521+00', 10, 2, '2021-10-10 22:40:22.521+00', '["docs/823d5cdd-a75c-42e2-ac85-9131951e42d2-rnimagepickerlibtempecb059fda54048c8b766de56fa8e6c19.jpg","docs/703b32bb-e4de-4e1a-b7c1-cd077d613da9-rnimagepickerlibtemp3a16da3418b9441fb660648b28de4981.jpg"]', '["docs/thumbnails-1633473706047823d5cdd-a75c-42e2-ac85-9131951e42d2-rnimagepickerlibtempecb059fda54048c8b766de56fa8e6c19.jpg","docs/thumbnails-1633473706048703b32bb-e4de-4e1a-b7c1-cd077d613da9-rnimagepickerlibtemp3a16da3418b9441fb660648b28de4981.jpg"]', 'yyyyy', 'afasdfsadf', 0.4, 4, 6, 1, 37.5214494368063, 126.898267148227, '서울 영등포구 영등포로 147 당산빌딩', 'wwwwx', '[{"role":"main","name":"sa12","price":"123"},{"role":"main","name":"asdf","price":"112"},{"role":"add","name":"adf","price":"123"}]', '2021-10-13 22:41:00+00', '2021-10-05 22:41:46+00');
INSERT INTO "public"."product_histories" VALUES (66, 69, 23, '2021-10-08 16:00:00+00', '2021-10-14 07:08:03.72+00', 'progressing', '2021-10-21 07:08:03.72+00', 22, 2, '2021-10-11 07:08:03.72+00', '["docs/401bff08-7867-49fd-bfb7-2a55bdb62cf1-rnimagepickerlibtemp3adda64529cb47c782cbb4f622168edb.jpg","docs/0ca9c229-8a99-4c0d-a6eb-734500761ea8-rnimagepickerlibtempa21283d52062453a8fab94571a449ad0.jpg"]', '["docs/thumbnails-1633504171349401bff08-7867-49fd-bfb7-2a55bdb62cf1-rnimagepickerlibtemp3adda64529cb47c782cbb4f622168edb.jpg","docs/thumbnails-16335041723100ca9c229-8a99-4c0d-a6eb-734500761ea8-rnimagepickerlibtempa21283d52062453a8fab94571a449ad0.jpg"]', 'ggg', 'ggrrrr', 0.4, 4, 6, 1, 37.5214494368063, 126.898267148227, '서울 영등포구 영등포로 147 당산빌딩', 'wwwwx', '[{"role":"main","name":"grrr","price":"12"},{"role":"main","name":"gfgf","price":"12"},{"role":"add","name":"fdg","price":"32"},{"role":"add","name":"hgf","price":"543"}]', '2021-10-14 07:09:01+00', '2021-10-06 07:09:32+00');
INSERT INTO "public"."product_histories" VALUES (67, 70, 23, '2021-10-09 16:00:00+00', '2021-10-14 07:18:32.663+00', 'progressing', '2021-10-21 07:18:32.663+00', 25, 2, '2021-10-11 07:18:32.663+00', '["docs/2f5eda84-c1ce-4d7f-bdb2-ffdae04732c8-rnimagepickerlibtemp97c379ed65d846d5a5c8b4588ef015c6.jpg","docs/c0e53512-dd10-4427-a758-6273510ad9b2-rnimagepickerlibtemp8ef90159ef384d51845da98d7f40d951.jpg"]', '["docs/thumbnails-16335047693462f5eda84-c1ce-4d7f-bdb2-ffdae04732c8-rnimagepickerlibtemp97c379ed65d846d5a5c8b4588ef015c6.jpg","docs/thumbnails-1633504769424c0e53512-dd10-4427-a758-6273510ad9b2-rnimagepickerlibtemp8ef90159ef384d51845da98d7f40d951.jpg"]', 'gdfg', 'hdfghsdgdg', 0.4, 4, 6, 1, 37.5214494368063, 126.898267148227, '서울 영등포구 영등포로 147 당산빌딩', 'wwwwx', '[{"role":"main","name":"dfgd","price":"123"},{"role":"add","name":"gfhdhg","price":"423"}]', '2021-10-14 07:19:00+00', '2021-10-06 07:19:29+00');
INSERT INTO "public"."product_histories" VALUES (60, 66, 23, '2021-10-03 16:00:00+00', '2021-10-07 17:42:38.376+00', 'end', '2021-10-14 17:42:38.376+00', 11, 1, '2021-10-04 17:42:38.376+00', '["docs/e5061c79-99d2-4078-8c7c-7992a7da451c-rnimagepickerlibtempd3adf140d5e1404bb6cde87e16700619.jpg"]', '["docs/thumbnails-1632851045164e5061c79-99d2-4078-8c7c-7992a7da451c-rnimagepickerlibtempd3adf140d5e1404bb6cde87e16700619.jpg"]', 'aaa', 'bbbb', 0.4, 4, 6, 1, 126.84368547031293, 37.53571572533554, '서울 강서구 화곡동 351-89', '4동 207호', '[{"role":"main","name":"www","price":"12"},{"role":"add","name":"ccc","price":"13"}]', '2021-10-07 17:43:02+00', '2021-09-28 17:44:06+00');
INSERT INTO "public"."product_histories" VALUES (61, 66, 23, '2021-10-03 16:00:00+00', '2021-10-07 17:42:38.376+00', 'end', '2021-10-14 17:42:38.376+00', 11, 1, '2021-10-04 17:42:38.376+00', '["docs/e5061c79-99d2-4078-8c7c-7992a7da451c-rnimagepickerlibtempd3adf140d5e1404bb6cde87e16700619.jpg"]', '["docs/thumbnails-1632851045164e5061c79-99d2-4078-8c7c-7992a7da451c-rnimagepickerlibtempd3adf140d5e1404bb6cde87e16700619.jpg"]', 'aaa', 'bbbb', 0.4, 4, 6, 1, 126.84368547031293, 37.53571572533554, '서울 강서구 화곡동 351-89', '4동 207호', '[{"role":"main","name":"www","price":"12"},{"role":"add","name":"ccc","price":"13"}]', '2021-10-07 17:43:03+00', '2021-09-28 17:44:06+00');

-- ----------------------------
-- Table structure for products
-- ----------------------------
DROP TABLE IF EXISTS "public"."products";
CREATE TABLE "public"."products" (
  "id" int4 NOT NULL DEFAULT nextval('products_id_seq'::regclass),
  "product_role" varchar(255) COLLATE "pg_catalog"."default",
  "user_id" int4,
  "finish_date" timestamptz(6),
  "counts" int4,
  "method" int4,
  "delivery_date" timestamptz(6),
  "images" text COLLATE "pg_catalog"."default",
  "thumbnails" text COLLATE "pg_catalog"."default",
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "details" text COLLATE "pg_catalog"."default",
  "range" int4 DEFAULT 1,
  "latitude" numeric DEFAULT 0,
  "longitude" numeric DEFAULT 0,
  "address" varchar(255) COLLATE "pg_catalog"."default",
  "address_detail" varchar(255) COLLATE "pg_catalog"."default",
  "state" int4 DEFAULT 1,
  "active_state" bool DEFAULT true,
  "p_apply_percentage" float8,
  "settlement_period" int4,
  "brokerage_fee" float8,
  "settlement_date" timestamptz(6),
  "ended_date" timestamptz(6),
  "created" timestamptz(6),
  "deleted" timestamptz(6),
  "updated" timestamptz(6)
)
;

-- ----------------------------
-- Records of products
-- ----------------------------
INSERT INTO "public"."products" VALUES (66, 'product', 23, '2021-10-03 16:00:00+00', 11, 1, '2021-10-04 17:42:38.376+00', '["docs/e5061c79-99d2-4078-8c7c-7992a7da451c-rnimagepickerlibtempd3adf140d5e1404bb6cde87e16700619.jpg"]', '["docs/thumbnails-1632851045164e5061c79-99d2-4078-8c7c-7992a7da451c-rnimagepickerlibtempd3adf140d5e1404bb6cde87e16700619.jpg"]', 'aaa', 'bbbb', 1, 126.84368547031293, 37.53571572533554, '서울 강서구 화곡동 351-89', '4동 207호', 5, 't', 0.4, 4, 6, '2021-10-14 17:42:38.376+00', '2021-10-07 17:42:38.376+00', '2021-09-28 17:44:06+00', NULL, '2021-10-14 17:43:00+00');
INSERT INTO "public"."products" VALUES (67, 'product', 23, '2021-10-08 16:00:00+00', 10, 1, '2021-10-10 21:44:12.204+00', '["docs/17a4952e-1aff-4b58-ad97-7669225fdb52-rnimagepickerlibtemp810c711445b845d5bd9e70446cf117db.jpg","docs/5d410251-45dd-4179-87d4-19062e0df353-rnimagepickerlibtemp81ad9c6aae1340afb58099e3968ea4bf.jpg","docs/de7e8e41-bd14-4df0-84c6-b41ce1398401-rnimagepickerlibtemp76e6c0e2a17c4376947dce48c725ac38.jpg","docs/62c57bd4-825e-4a4b-8b51-847b6ea34b45-rnimagepickerlibtemp7584bae22e0b43bdaa3317d6dd30c8a7.jpg"]', '["docs/thumbnails-163347035934017a4952e-1aff-4b58-ad97-7669225fdb52-rnimagepickerlibtemp810c711445b845d5bd9e70446cf117db.jpg","docs/thumbnails-16334703600615d410251-45dd-4179-87d4-19062e0df353-rnimagepickerlibtemp81ad9c6aae1340afb58099e3968ea4bf.jpg","docs/thumbnails-1633470360062de7e8e41-bd14-4df0-84c6-b41ce1398401-rnimagepickerlibtemp76e6c0e2a17c4376947dce48c725ac38.jpg","docs/thumbnails-163347036006262c57bd4-825e-4a4b-8b51-847b6ea34b45-rnimagepickerlibtemp7584bae22e0b43bdaa3317d6dd30c8a7.jpg"]', 'aaa1', 'ccccccccccccc', 1, 37.5214494368063, 126.898267148227, '서울 영등포구 영등포로 147 당산빌딩', 'wwwwx', 4, 't', 0.4, 4, 6, '2021-10-20 21:44:12.204+00', '2021-10-13 21:44:12.204+00', '2021-10-05 21:46:00+00', NULL, '2021-10-13 21:45:00+00');
INSERT INTO "public"."products" VALUES (68, 'product', 23, '2021-10-08 16:00:00+00', 10, 2, '2021-10-10 22:40:22.521+00', '["docs/823d5cdd-a75c-42e2-ac85-9131951e42d2-rnimagepickerlibtempecb059fda54048c8b766de56fa8e6c19.jpg","docs/703b32bb-e4de-4e1a-b7c1-cd077d613da9-rnimagepickerlibtemp3a16da3418b9441fb660648b28de4981.jpg"]', '["docs/thumbnails-1633473706047823d5cdd-a75c-42e2-ac85-9131951e42d2-rnimagepickerlibtempecb059fda54048c8b766de56fa8e6c19.jpg","docs/thumbnails-1633473706048703b32bb-e4de-4e1a-b7c1-cd077d613da9-rnimagepickerlibtemp3a16da3418b9441fb660648b28de4981.jpg"]', 'yyyyy', 'afasdfsadf', 1, 37.5214494368063, 126.898267148227, '서울 영등포구 영등포로 147 당산빌딩', 'wwwwx', 4, 't', 0.4, 4, 6, '2021-10-20 22:40:22.521+00', '2021-10-13 22:40:22.521+00', '2021-10-05 22:41:46+00', NULL, '2021-10-13 22:41:00+00');
INSERT INTO "public"."products" VALUES (69, 'product', 23, '2021-10-08 16:00:00+00', 22, 2, '2021-10-11 07:08:03.72+00', '["docs/401bff08-7867-49fd-bfb7-2a55bdb62cf1-rnimagepickerlibtemp3adda64529cb47c782cbb4f622168edb.jpg","docs/0ca9c229-8a99-4c0d-a6eb-734500761ea8-rnimagepickerlibtempa21283d52062453a8fab94571a449ad0.jpg"]', '["docs/thumbnails-1633504171349401bff08-7867-49fd-bfb7-2a55bdb62cf1-rnimagepickerlibtemp3adda64529cb47c782cbb4f622168edb.jpg","docs/thumbnails-16335041723100ca9c229-8a99-4c0d-a6eb-734500761ea8-rnimagepickerlibtempa21283d52062453a8fab94571a449ad0.jpg"]', 'ggg', 'ggrrrr', 1, 37.5214494368063, 126.898267148227, '서울 영등포구 영등포로 147 당산빌딩', 'wwwwx', 4, 't', 0.4, 4, 6, '2021-10-21 07:08:03.72+00', '2021-10-14 07:08:03.72+00', '2021-10-06 07:09:32+00', NULL, '2021-10-14 07:09:00+00');
INSERT INTO "public"."products" VALUES (70, 'product', 23, '2021-10-09 16:00:00+00', 25, 2, '2021-10-11 07:18:32.663+00', '["docs/2f5eda84-c1ce-4d7f-bdb2-ffdae04732c8-rnimagepickerlibtemp97c379ed65d846d5a5c8b4588ef015c6.jpg","docs/c0e53512-dd10-4427-a758-6273510ad9b2-rnimagepickerlibtemp8ef90159ef384d51845da98d7f40d951.jpg"]', '["docs/thumbnails-16335047693462f5eda84-c1ce-4d7f-bdb2-ffdae04732c8-rnimagepickerlibtemp97c379ed65d846d5a5c8b4588ef015c6.jpg","docs/thumbnails-1633504769424c0e53512-dd10-4427-a758-6273510ad9b2-rnimagepickerlibtemp8ef90159ef384d51845da98d7f40d951.jpg"]', 'gdfg', 'hdfghsdgdg', 1, 37.5214494368063, 126.898267148227, '서울 영등포구 영등포로 147 당산빌딩', 'wwwwx', 4, 't', 0.4, 4, 6, '2021-10-21 07:18:32.663+00', '2021-10-14 07:18:32.663+00', '2021-10-06 07:19:29+00', NULL, '2021-10-14 07:19:00+00');
INSERT INTO "public"."products" VALUES (71, 'product', 23, '2021-10-08 16:00:00+00', 55, 1, '2021-10-10 07:21:23.304+00', '["docs/ae7e9c23-8cee-4648-b2b7-40ff6fc50332-rnimagepickerlibtemp22725646d30244a287b4d3e512eda0f2.jpg","docs/9d5c1526-6749-4554-abf8-a9e527e1ca4e-rnimagepickerlibtempa11a77f5fd7942158868c09f82c7c098.jpg"]', '["docs/thumbnails-1633504942105ae7e9c23-8cee-4648-b2b7-40ff6fc50332-rnimagepickerlibtemp22725646d30244a287b4d3e512eda0f2.jpg","docs/thumbnails-16335049421849d5c1526-6749-4554-abf8-a9e527e1ca4e-rnimagepickerlibtempa11a77f5fd7942158868c09f82c7c098.jpg"]', 'adfsfd', 'sagdfgdfh', 1, 37.5214494368063, 126.898267148227, '서울 영등포구 영등포로 147 당산빌딩', 'wwwwx', 4, 't', 0.4, 4, 6, '2021-10-20 07:21:23.304+00', '2021-10-13 07:21:23.304+00', '2021-10-06 07:22:22+00', NULL, '2021-10-13 07:22:00+00');

-- ----------------------------
-- Table structure for reports
-- ----------------------------
DROP TABLE IF EXISTS "public"."reports";
CREATE TABLE "public"."reports" (
  "id" int4 NOT NULL DEFAULT nextval('reports_id_seq'::regclass),
  "user_id" int4,
  "commit_id" int4,
  "created" timestamptz(6),
  "deleted" timestamptz(6),
  "product_id" int4
)
;

-- ----------------------------
-- Records of reports
-- ----------------------------

-- ----------------------------
-- Table structure for sales_histories
-- ----------------------------
DROP TABLE IF EXISTS "public"."sales_histories";
CREATE TABLE "public"."sales_histories" (
  "id" int4 NOT NULL DEFAULT nextval('sales_histories_id_seq'::regclass),
  "user_id" int4,
  "product_id" int4,
  "old_product_id" int4,
  "purchase_details" varchar(255) COLLATE "pg_catalog"."default",
  "payment_amount" float8,
  "discount" float8,
  "buyer_phone" varchar(255) COLLATE "pg_catalog"."default",
  "buyer_address" varchar(255) COLLATE "pg_catalog"."default",
  "payment_method" varchar(255) COLLATE "pg_catalog"."default",
  "apply_point" int4,
  "delivery_date" timestamptz(6),
  "created" timestamptz(6),
  "deleted" timestamptz(6),
  "final_ended" timestamptz(6),
  "none_method" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of sales_histories
-- ----------------------------

-- ----------------------------
-- Table structure for t_e
-- ----------------------------
DROP TABLE IF EXISTS "public"."t_e";
CREATE TABLE "public"."t_e" (
  "docs" text COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of t_e
-- ----------------------------

-- ----------------------------
-- Table structure for togethers
-- ----------------------------
DROP TABLE IF EXISTS "public"."togethers";
CREATE TABLE "public"."togethers" (
  "id" int4 NOT NULL DEFAULT nextval('togethers_id_seq'::regclass),
  "user_id" int4,
  "product_id" int4,
  "email" varchar(255) COLLATE "pg_catalog"."default",
  "created" timestamptz(6),
  "final_ended" timestamptz(6)
)
;

-- ----------------------------
-- Records of togethers
-- ----------------------------

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS "public"."users";
CREATE TABLE "public"."users" (
  "id" int4 NOT NULL DEFAULT nextval('users_id_seq'::regclass),
  "role" varchar(255) COLLATE "pg_catalog"."default" DEFAULT 'user'::character varying,
  "user_type" varchar(255) COLLATE "pg_catalog"."default" DEFAULT 'general'::character varying,
  "admin_id" varchar(255) COLLATE "pg_catalog"."default",
  "admin_password" varchar(255) COLLATE "pg_catalog"."default",
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "nickname" varchar(255) COLLATE "pg_catalog"."default",
  "phone" varchar(255) COLLATE "pg_catalog"."default",
  "device_type" varchar(255) COLLATE "pg_catalog"."default",
  "address" varchar(255) COLLATE "pg_catalog"."default",
  "address_detail" varchar(255) COLLATE "pg_catalog"."default",
  "latitude" numeric DEFAULT 0,
  "longitude" numeric DEFAULT 0,
  "photo" varchar(255) COLLATE "pg_catalog"."default",
  "thumbnail" varchar(255) COLLATE "pg_catalog"."default",
  "points" float8,
  "comment_notification" bool DEFAULT true,
  "angol_notification" bool DEFAULT true,
  "tool_notification" bool DEFAULT true,
  "delivery_notification" bool DEFAULT true,
  "last_connected" timestamptz(6),
  "last_calculated" timestamptz(6),
  "eccumulated" int4 DEFAULT 0,
  "logins" int4 DEFAULT 0,
  "push_token" varchar(255) COLLATE "pg_catalog"."default",
  "created" timestamptz(6),
  "updated" timestamptz(6),
  "deleted" timestamptz(6),
  "business_num" varchar(255) COLLATE "pg_catalog"."default",
  "bank_name" varchar(255) COLLATE "pg_catalog"."default",
  "bank_account" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO "public"."users" VALUES (1, 'admin', 'general', 'admin', '1234', NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL, 144, 't', 't', 't', 't', '2021-09-24 01:43:17.975+00', '2021-09-24 01:43:17.975+00', 5924, 0, NULL, '2021-08-25 14:00:54+00', '2021-08-27 11:01:02+00', NULL, NULL, NULL, NULL);
INSERT INTO "public"."users" VALUES (24, 'user', 'general', NULL, NULL, '김학중', '설렁탕 춘의동점', '01056837290', 'android', '경기 부천시 춘의동 195', '2212호', 126.79158268723654, 37.50164407473136, NULL, NULL, 0, 'f', 't', 't', 't', '2021-10-18 08:25:34.531+00', '2021-10-18 08:24:28.809+00', 965, 1, 'c1yqFeZaRIufMa-rjqa68U:APA91bHzgIVSwzgnuIgYk-Zny56ZpdiLYioimGncft_XXy9CC1jjwTTvPvVnhIIKEKLP_ULWJ7FDn6KfoyGOi4IF4Wd_0SeYOC3yduvDOVccvB1wi83GkUhj7d--ObnbxSDv3uWKtAPc', '2021-09-29 01:08:51+00', '2021-10-08 09:42:05+00', NULL, NULL, NULL, NULL);
INSERT INTO "public"."users" VALUES (22, 'user', 'general', NULL, NULL, '장신남', '보배5', '01012345674', 'android', '강남구15', '신사동 15', 127.8934534534521, 36.2893123345345, NULL, NULL, 0, 't', 't', 't', 't', '2021-10-07 21:36:26.224+00', '2021-10-07 21:36:18.307+00', 348, 2, 'cesiHgszQU29gGdfcSKWE8:APA91bH3N4xXq-dynnD_PCBwzS1LXgafJs1nnNAfdU0mGtlx8sUHQmOcttzS4eVh-SyYiqe2Mr6opTiRkBRZYEneyUvcJFVSFfwqNatXxIlRvr-I9t0DWMvE25nOQ7rHp91NuaUYXkVg', '2021-09-28 09:15:43+00', '2021-09-28 09:15:43+00', NULL, NULL, NULL, NULL);
INSERT INTO "public"."users" VALUES (23, 'user', 'general', NULL, NULL, '테스트', '테스트', '01012345673', 'android', ' 북한산둘레길 옛성길7구간', '108호동 14', 37.60759496019467, 126.94698432423915, NULL, NULL, 0, 't', 't', 't', 't', '2021-10-19 04:14:46.443+00', '2021-10-19 04:14:15.517+00', 120228, 43, 'epRNP-L6QYKd31fv8W_qZd:APA91bH-05Z6H_9dC6hF9hgYMvPJyokEfAsUOiLdKBkW7ykujKhGqxmjcPrb7PCD3UnFGOXMPpHT80cW3ZFSQD3UkNLecWTlB2ifrwWSkLk3lpd00psLwg01zMLdk6xXiHeJhKkx6fp0', '2021-09-28 11:40:14+00', '2021-10-19 04:05:57+00', NULL, NULL, NULL, NULL);
INSERT INTO "public"."users" VALUES (25, 'user', 'general', NULL, NULL, '윤진호', 'ㅇ', '01043801175', 'android', '서울 동작구 장승배기로10길 47 현대약국', '202호', 126.941529195645, 37.5044534051829, NULL, NULL, 0, 't', 't', 't', 't', '2021-10-09 00:46:56.587+00', '2021-10-09 00:40:17.579+00', 261, 3, 'cN99AySsR8KuzLouFf3K17:APA91bETtdwM3-7s4woRVkooCESrtEh_nnlZO40U4QxKmheDecgDzkZHmFUt798gvgK5AVAn8mTtjRFQtlEMklQDqK9eqDHEpF3StxC912JCpqoAhCM9LlOOBPiEVtCEbfLmA5fAxwKh', '2021-10-06 15:35:04+00', '2021-10-06 15:35:04+00', NULL, NULL, NULL, NULL);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."alarms_id_seq"
OWNED BY "public"."alarms"."id";
SELECT setval('"public"."alarms_id_seq"', 521, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."angcols_id_seq"
OWNED BY "public"."angcols"."id";
SELECT setval('"public"."angcols_id_seq"', 5, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."banners_id_seq"
OWNED BY "public"."banners"."id";
SELECT setval('"public"."banners_id_seq"', 2, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."commits_id_seq"
OWNED BY "public"."commits"."id";
SELECT setval('"public"."commits_id_seq"', 99, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."favorites_id_seq"
OWNED BY "public"."favorites"."id";
SELECT setval('"public"."favorites_id_seq"', 9, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."initials_id_seq"
OWNED BY "public"."initials"."id";
SELECT setval('"public"."initials_id_seq"', 2, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."invites_id_seq"
OWNED BY "public"."invites"."id";
SELECT setval('"public"."invites_id_seq"', 88, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."points_id_seq"
OWNED BY "public"."points"."id";
SELECT setval('"public"."points_id_seq"', 44, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."product_contents_id_seq"
OWNED BY "public"."product_contents"."id";
SELECT setval('"public"."product_contents_id_seq"', 120, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."product_histories_id_seq"
OWNED BY "public"."product_histories"."id";
SELECT setval('"public"."product_histories_id_seq"', 68, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."products_id_seq"
OWNED BY "public"."products"."id";
SELECT setval('"public"."products_id_seq"', 72, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."reports_id_seq"
OWNED BY "public"."reports"."id";
SELECT setval('"public"."reports_id_seq"', 30, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."sales_histories_id_seq"
OWNED BY "public"."sales_histories"."id";
SELECT setval('"public"."sales_histories_id_seq"', 46, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."togethers_id_seq"
OWNED BY "public"."togethers"."id";
SELECT setval('"public"."togethers_id_seq"', 20, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."users_id_seq"
OWNED BY "public"."users"."id";
SELECT setval('"public"."users_id_seq"', 26, true);

-- ----------------------------
-- Primary Key structure for table alarms
-- ----------------------------
ALTER TABLE "public"."alarms" ADD CONSTRAINT "alarms_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table angcols
-- ----------------------------
ALTER TABLE "public"."angcols" ADD CONSTRAINT "angcols_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table banners
-- ----------------------------
ALTER TABLE "public"."banners" ADD CONSTRAINT "banners_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table commits
-- ----------------------------
ALTER TABLE "public"."commits" ADD CONSTRAINT "commits_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table favorites
-- ----------------------------
ALTER TABLE "public"."favorites" ADD CONSTRAINT "favorites_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table initials
-- ----------------------------
ALTER TABLE "public"."initials" ADD CONSTRAINT "initials_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table invites
-- ----------------------------
ALTER TABLE "public"."invites" ADD CONSTRAINT "invites_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table points
-- ----------------------------
ALTER TABLE "public"."points" ADD CONSTRAINT "points_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table product_contents
-- ----------------------------
ALTER TABLE "public"."product_contents" ADD CONSTRAINT "product_contents_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table product_histories
-- ----------------------------
ALTER TABLE "public"."product_histories" ADD CONSTRAINT "product_histories_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table products
-- ----------------------------
ALTER TABLE "public"."products" ADD CONSTRAINT "products_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table reports
-- ----------------------------
ALTER TABLE "public"."reports" ADD CONSTRAINT "reports_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table sales_histories
-- ----------------------------
ALTER TABLE "public"."sales_histories" ADD CONSTRAINT "sales_histories_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table togethers
-- ----------------------------
ALTER TABLE "public"."togethers" ADD CONSTRAINT "togethers_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table users
-- ----------------------------
ALTER TABLE "public"."users" ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Foreign Keys structure for table angcols
-- ----------------------------
ALTER TABLE "public"."angcols" ADD CONSTRAINT "angcols_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "public"."products" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table commits
-- ----------------------------
ALTER TABLE "public"."commits" ADD CONSTRAINT "commits_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "public"."products" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table product_contents
-- ----------------------------
ALTER TABLE "public"."product_contents" ADD CONSTRAINT "product_contents_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "public"."products" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table sales_histories
-- ----------------------------
ALTER TABLE "public"."sales_histories" ADD CONSTRAINT "sales_histories_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "public"."products" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table togethers
-- ----------------------------
ALTER TABLE "public"."togethers" ADD CONSTRAINT "togethers_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "public"."products" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
