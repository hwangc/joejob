-- Drop table

DROP TABLE IF EXISTS public.jj_users;

CREATE TABLE public.jj_users (
	id serial NOT NULL,
	email varchar NOT NULL,
	username varchar NOT NULL,
	"password" varchar NOT NULL,
	height int2 NULL,
	weight int2 NULL,
	age int2 NULL,
	mobile_number text NULL,
	profile_photo bytea NULL,
	registered_dt timestamp NULL,
	modified_dt timestamp NULL,
	CONSTRAINT jj_users_email_key UNIQUE (email),
	CONSTRAINT jj_users_pkey PRIMARY KEY (id)
);
CREATE INDEX jj_users_age_idx ON public.jj_users USING btree (age);
CREATE INDEX jj_users_height_idx ON public.jj_users USING hash (height);
CREATE INDEX jj_users_weight_idx ON public.jj_users USING hash (weight);

-- Drop table

DROP TABLE IF EXISTS public.jj_vendors;

CREATE TABLE public.jj_vendors (
	id serial NOT NULL,
	"name" varchar NOT NULL,
	url varchar NOT NULL,
	favorites int4 NULL DEFAULT 0,
	registered_dt timestamp NULL,
	modified_dt timestamp NULL,
	CONSTRAINT jj_vendors_name_key UNIQUE (name),
	CONSTRAINT jj_vendors_pkey PRIMARY KEY (id),
	CONSTRAINT jj_vendors_url_key UNIQUE (url)
);
CREATE INDEX jj_vendors_favorites_idx ON public.jj_vendors USING hash (favorites);

-- Drop table

DROP TABLE IF EXISTS public.jj_favorites;

CREATE TABLE public.jj_favorites (
	id serial NOT NULL,
	uid int4 NOT NULL,
	vid int4 NOT NULL,
	registered_dt timestamp NULL,
	CONSTRAINT jj_favorites_pkey PRIMARY KEY (id),
	CONSTRAINT jj_favorites_uid_fkey FOREIGN KEY (uid) REFERENCES jj_users(id) ON DELETE CASCADE,
	CONSTRAINT jj_favorites_vid_fkey FOREIGN KEY (vid) REFERENCES jj_vendors(id) ON DELETE CASCADE
);
CREATE INDEX jj_favorites_uid_idx ON public.jj_favorites USING hash (uid);
CREATE INDEX jj_favorites_vid_idx ON public.jj_favorites USING hash (vid);