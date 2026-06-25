ALTER TABLE `orders` ADD COLUMN `shipping_address` text;
--> statement-breakpoint
ALTER TABLE `order_items` ADD COLUMN `product_name` text NOT NULL DEFAULT '';
