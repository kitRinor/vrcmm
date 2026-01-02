// desktop/src-tauri/src/bin/gen_bindings.rs

use specta_typescript::{BigIntExportBehavior, Typescript};
use vrcp_lib::create_specta_builder;
fn main() {
    println!("🚀 Generating bindings...");

    let builder = create_specta_builder();

    builder
        .export(
            Typescript::default()
                .bigint(BigIntExportBehavior::Number) // BigIntをnumberとして扱う
                .formatter(specta_typescript::formatter::prettier)
                .header("// @ts-nocheck\n/* eslint-disable */"),
            "../src/generated/bindings.ts",
        )
        .expect("Failed to export typescript bindings");

    println!("✅ Bindings generated at ../src/generated/bindings.ts");
}
