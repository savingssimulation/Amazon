import { test, expect } from '@playwright/test';

test('homepage has title and scenarios', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Fixed-term delivery/);
  await expect(page.getByRole('heading', { name: 'ライフスタイル別 節約額シミュレーション' })).toBeVisible();
});