import { boolean, integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const user = pgTable("user", {
	id: text("id").primaryKey(),
	name: text('name').notNull(),
	email: text('email').notNull().unique(),
	emailVerified: boolean('email_verified').notNull(),
	image: text('image'),
	createdAt: timestamp('created_at').notNull(),
	updatedAt: timestamp('updated_at').notNull(),
	role: text('role'),
	banned: boolean('banned'),
	banReason: text('ban_reason'),
	banExpires: timestamp('ban_expires'),
	customerId: text('customer_id'),
});

export const session = pgTable("session", {
	id: text("id").primaryKey(),
	expiresAt: timestamp('expires_at').notNull(),
	token: text('token').notNull().unique(),
	createdAt: timestamp('created_at').notNull(),
	updatedAt: timestamp('updated_at').notNull(),
	ipAddress: text('ip_address'),
	userAgent: text('user_agent'),
	userId: text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
	impersonatedBy: text('impersonated_by')
});

export const account = pgTable("account", {
	id: text("id").primaryKey(),
	accountId: text('account_id').notNull(),
	providerId: text('provider_id').notNull(),
	userId: text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
	accessToken: text('access_token'),
	refreshToken: text('refresh_token'),
	idToken: text('id_token'),
	accessTokenExpiresAt: timestamp('access_token_expires_at'),
	refreshTokenExpiresAt: timestamp('refresh_token_expires_at'),
	scope: text('scope'),
	password: text('password'),
	createdAt: timestamp('created_at').notNull(),
	updatedAt: timestamp('updated_at').notNull()
});

export const verification = pgTable("verification", {
	id: text("id").primaryKey(),
	identifier: text('identifier').notNull(),
	value: text('value').notNull(),
	expiresAt: timestamp('expires_at').notNull(),
	createdAt: timestamp('created_at'),
	updatedAt: timestamp('updated_at')
});

export const payment = pgTable("payment", {
	id: text("id").primaryKey(),
	priceId: text('price_id').notNull(),
	type: text('type').notNull(),
	interval: text('interval'),
	userId: text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
	customerId: text('customer_id').notNull(),
	subscriptionId: text('subscription_id'),
	status: text('status').notNull(),
	periodStart: timestamp('period_start'),
	periodEnd: timestamp('period_end'),
	cancelAtPeriodEnd: boolean('cancel_at_period_end'),
	trialStart: timestamp('trial_start'),
	trialEnd: timestamp('trial_end'),
	createdAt: timestamp('created_at').notNull().defaultNow(),
	updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

// 评价系统相关表
export const reviews = pgTable("reviews", {
	id: text("id").primaryKey(),
	userId: text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
	productId: text('product_id'), // 产品ID，可以关联到具体的产品
	rating: integer('rating').notNull(), // 1-5星评分
	title: text('title'), // 评价标题
	content: text('content'), // 评价内容
	isVerified: boolean('is_verified').default(false), // 是否已验证
	isPublished: boolean('is_published').default(true), // 是否公开显示
	helpfulCount: integer('helpful_count').default(0), // 有用计数
	createdAt: timestamp('created_at').notNull().defaultNow(),
	updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const reviewImages = pgTable("review_images", {
	id: text("id").primaryKey(),
	reviewId: text('review_id').notNull().references(() => reviews.id, { onDelete: 'cascade' }),
	imageUrl: text('image_url').notNull(),
	altText: text('alt_text'),
	order: integer('order').default(0), // 图片排序
	createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const reviewReplies = pgTable("review_replies", {
	id: text("id").primaryKey(),
	reviewId: text('review_id').notNull().references(() => reviews.id, { onDelete: 'cascade' }),
	userId: text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
	content: text('content').notNull(),
	isAdminReply: boolean('is_admin_reply').default(false), // 是否为管理员回复
	createdAt: timestamp('created_at').notNull().defaultNow(),
	updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

// 关系定义
export const userRelations = relations(user, ({ many }) => ({
	reviews: many(reviews),
	reviewReplies: many(reviewReplies),
}));

export const reviewsRelations = relations(reviews, ({ one, many }) => ({
	user: one(user, { fields: [reviews.userId], references: [user.id] }),
	images: many(reviewImages),
	replies: many(reviewReplies),
}));

export const reviewImagesRelations = relations(reviewImages, ({ one }) => ({
	review: one(reviews, { fields: [reviewImages.reviewId], references: [reviews.id] }),
}));

export const reviewRepliesRelations = relations(reviewReplies, ({ one }) => ({
	review: one(reviews, { fields: [reviewReplies.reviewId], references: [reviews.id] }),
	user: one(user, { fields: [reviewReplies.userId], references: [user.id] }),
}));
