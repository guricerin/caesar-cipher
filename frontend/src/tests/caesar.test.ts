import { decrypt, decrypts25 } from "../caesar"

// https://play.picoctf.org/practice/challenge/144?originalEvent=34&page=1
const target = "cvpbPGS{arkg_gvzr_V'yy_gel_2_ebhaqf_bs_ebg13_nSkgmDJE}"
const expecteds = new Map([
  [13, "picoCTF{next_time_I'll_try_2_rounds_of_rot13_aFxtzQWR}"],
  [2, "exrdRIU{ctmi_ixbt_X'aa_ign_2_gdjcsh_du_gdi13_pUmioFLG}"],
  [20, "wpjvJAM{ulea_aptl_P'ss_ayf_2_yvbukz_vm_yva13_hMeagXDY}"],
  [16, "slfrFWI{qhaw_wlph_L'oo_wub_2_urxqgv_ri_urw13_dIawcTZU}"],
  [23, "zsmyMDP{xohd_dswo_S'vv_dbi_2_byexnc_yp_byd13_kPhdjAGB}"],
  [8, "kdxjXOA{izso_odhz_D'gg_omt_2_mjpiyn_ja_mjo13_vAsouLRM}"],
  [14, "qjdpDUG{ofyu_ujnf_J'mm_usz_2_spvoet_pg_spu13_bGyuaRXS}"],
  [7, "jcwiWNZ{hyrn_ncgy_C'ff_nls_2_liohxm_iz_lin13_uZrntKQL}"],
  [22, "yrlxLCO{wngc_crvn_R'uu_cah_2_axdwmb_xo_axc13_jOgciZFA}"],
  [24, "atnzNEQ{ypie_etxp_T'ww_ecj_2_czfyod_zq_cze13_lQiekBHC}"],
  [12, "ohbnBSE{mdws_shld_H'kk_sqx_2_qntmcr_ne_qns13_zEwsyPVQ}"],
  [1, "dwqcQHT{bslh_hwas_W'zz_hfm_2_fcibrg_ct_fch13_oTlhnEKF}"],
  [25, "buoaOFR{zqjf_fuyq_U'xx_fdk_2_dagzpe_ar_daf13_mRjflCID}"],
  [3, "fyseSJV{dunj_jycu_Y'bb_jho_2_hekdti_ev_hej13_qVnjpGMH}"],
  [11, "ngamARD{lcvr_rgkc_G'jj_rpw_2_pmslbq_md_pmr13_yDvrxOUP}"],
  [9, "leykYPB{jatp_peia_E'hh_pnu_2_nkqjzo_kb_nkp13_wBtpvMSN}"],
  [4, "gztfTKW{evok_kzdv_Z'cc_kip_2_ifleuj_fw_ifk13_rWokqHNI}"],
  [5, "haugULX{fwpl_laew_A'dd_ljq_2_jgmfvk_gx_jgl13_sXplrIOJ}"],
  [6, "ibvhVMY{gxqm_mbfx_B'ee_mkr_2_khngwl_hy_khm13_tYqmsJPK}"],
  [18, "unhtHYK{sjcy_ynrj_N'qq_ywd_2_wtzsix_tk_wty13_fKcyeVBW}"],
  [19, "voiuIZL{tkdz_zosk_O'rr_zxe_2_xuatjy_ul_xuz13_gLdzfWCX}"],
  [10, "mfzlZQC{kbuq_qfjb_F'ii_qov_2_olrkap_lc_olq13_xCuqwNTO}"],
  [17, "tmgsGXJ{ribx_xmqi_M'pp_xvc_2_vsyrhw_sj_vsx13_eJbxdUAV}"],
  [21, "xqkwKBN{vmfb_bqum_Q'tt_bzg_2_zwcvla_wn_zwb13_iNfbhYEZ}"],
  [15, "rkeqEVH{pgzv_vkog_K'nn_vta_2_tqwpfu_qh_tqv13_cHzvbSYT}"],
])

test('decrypt', () => {
  expecteds.forEach((expected, shift) => {
    expect(decrypt(target, shift)).toBe(expected)
  })
})

test('decrypts25', () => {
  const it = [...expecteds.entries()].sort((a, b) => {
    return a[0] - b[0] // キーで昇順
  }).values()
  const es = Array.from(new Map(it).values())
  const actuals = decrypts25(target)

  es.forEach((expected, i) => {
    expect(actuals[i]).toBe(expected)
  })
})

test('en + jp', () => {
  const expected = 'bあcア亜d'
  const actual = decrypt('aあbア亜c', 1)
  expect(actual).toBe(expected)
})
